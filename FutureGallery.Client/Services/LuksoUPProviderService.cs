using Microsoft.JSInterop;
using static FutureGallery.Client.Services.ILuksoUPProviderService;

namespace FutureGallery.Client.Services;

public class LuksoUPProviderService(IJSRuntime jsRuntime) : ILuksoUPProviderService
{
    private bool _isInitialized;
    private readonly SemaphoreSlim _initLock = new(1, 1);
    private readonly TaskCompletionSource _initializationTcs = new(TaskCreationOptions.RunContinuationsAsynchronously);

    private DotNetObjectReference<LuksoUPProviderService>? _dotNetRef;

    public string? VisitorUP { get; private set; }
    public string? HostUP { get; private set; }

    public event AsyncUPChangedHandler? VisitorUPChangedAsync;
    public event AsyncUPChangedHandler? HostUPChangedAsync;
    public event AsyncGenericUPChangedHandler? UPChangedAsync;

    /// <summary>
    /// Await this in App.razor or elsewhere to ensure the service is initialized.
    /// </summary>
    public Task Initialization => _initializationTcs.Task;

    public async Task InitializeAsync()
    {
        if (_isInitialized)
            return;

        await _initLock.WaitAsync();
        try
        {
            if (_isInitialized)
                return;

            // var web3InteropModule = await jsRuntime.InvokeAsync<IJSObjectReference>("import", "./js/web3Interop.bundle.js?v=1.0.15");
            // await web3InteropModule.InvokeVoidAsync("initF030Lukso");

            await jsRuntime.InvokeVoidAsync("initF030Lukso");
            var available = await jsRuntime.InvokeAsync<bool>("eval", "typeof window.f030Lukso !== 'undefined' && window.f030Lukso.isHostedMiniApp");

            if (available)
            {
                _dotNetRef?.Dispose();
                _dotNetRef = DotNetObjectReference.Create(this);
                await jsRuntime.InvokeVoidAsync("f030Lukso.registerBlazorInterop", _dotNetRef, nameof(OnVisitorUPChanged), nameof(OnHostUPChanged));
            }
            else
            {
                Console.WriteLine("⚠️ Not running inside LUKSO Grid — skipping registerBlazorInterop.");
            }

            _isInitialized = true;
            _initializationTcs.TrySetResult();
        }
        catch (Exception ex)
        {
            _initializationTcs.TrySetException(ex);
            await Console.Error.WriteLineAsync($"❌ Initialization error: {ex.Message}");
        }
        finally
        {
            _initLock.Release();
        }
    }

    [JSInvokable("OnVisitorUPChanged")]
    public Task OnVisitorUPChanged() => UpdateVisitorUPAsync();

    [JSInvokable("OnHostUPChanged")]
    public Task OnHostUPChanged() => UpdateHostUPAsync();

    private async Task UpdateVisitorUPAsync()
    {
        try
        {
            VisitorUP = await jsRuntime.InvokeAsync<string>("f030Lukso.getVisitorUP");
            await RaiseVisitorUPChangedAsync();
            await RaiseUPChangedAsync();
        }
        catch (JSException jsEx)
        {
            await Console.Error.WriteLineAsync($"❌ Failed to get Visitor UP: {jsEx.Message}");
        }
    }

    private async Task UpdateHostUPAsync()
    {
        try
        {
            HostUP = await jsRuntime.InvokeAsync<string>("f030Lukso.getHostUP");
            await RaiseHostUPChangedAsync();
            await RaiseUPChangedAsync();
        }
        catch (JSException jsEx)
        {
            await Console.Error.WriteLineAsync($"❌ Failed to get Host UP: {jsEx.Message}");
        }
    }

    private async Task RaiseVisitorUPChangedAsync()
    {
        if (VisitorUPChangedAsync is not null)
        {
            var handlers = VisitorUPChangedAsync.GetInvocationList().Cast<AsyncUPChangedHandler>();
            await Task.WhenAll(handlers.Select(h => h(VisitorUP)));
        }
    }

    private async Task RaiseHostUPChangedAsync()
    {
        if (HostUPChangedAsync is not null)
        {
            var handlers = HostUPChangedAsync.GetInvocationList().Cast<AsyncUPChangedHandler>();
            await Task.WhenAll(handlers.Select(h => h(HostUP)));
        }
    }

    private async Task RaiseUPChangedAsync()
    {
        if (UPChangedAsync is not null)
        {
            var handlers = UPChangedAsync.GetInvocationList().Cast<AsyncGenericUPChangedHandler>();
            await Task.WhenAll(handlers.Select(h => h(VisitorUP, HostUP)));
        }
    }

    public async ValueTask DisposeAsync()
    {
        _dotNetRef?.Dispose();
        GC.SuppressFinalize(this);
        await Task.CompletedTask;
    }
}