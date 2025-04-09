namespace FutureGallery.Client.Shared.Models;

public class GalleryItemIdentifier
{
    public string TokenContract { get; set; } = default!;
    public string TokenId { get; set; } = string.Empty; // Empty string means LSP7
}