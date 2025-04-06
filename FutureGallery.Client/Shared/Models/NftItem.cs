namespace FutureGallery.Client.Shared.Models;

public class NftItem
{
    public string Title { get; set; } = string.Empty;
    public string Metadata { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public int LikeCount { get; set; }
    public bool Liked { get; set; } = false;
    public string Status { get; set; } = "Available";
}