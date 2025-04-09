namespace FutureGallery.Client.Shared.Models;

public class GalleryItemViewModel
{
    public string TokenContract { get; set; } = string.Empty;
    public string TokenId { get; set; } = string.Empty;

    public string Title { get; set; } = string.Empty;
    public string Metadata { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;

    public bool Liked { get; set; }
    public int LikeCount { get; set; }

    public string Status { get; set; } = "Available";
}