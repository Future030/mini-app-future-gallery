namespace FutureGallery.Client.Services;

public interface ILuksoUPProviderService : IAsyncDisposable
{
    string? VisitorUP { get; }
    string? HostUP { get; }

    delegate Task AsyncUPChangedHandler(string? upAddress);
    delegate Task AsyncGenericUPChangedHandler(string? visitorUP, string? hostUP);

    event AsyncUPChangedHandler? VisitorUPChangedAsync;
    event AsyncUPChangedHandler? HostUPChangedAsync;
    event AsyncGenericUPChangedHandler? UPChangedAsync;

    Task InitializeAsync();
    Task Initialization { get; }
}