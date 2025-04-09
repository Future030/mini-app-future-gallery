namespace FutureGallery.Client.Shared.Models;

public static class GalleryItemTransformExtensions
{
    public static List<GalleryItemViewModel> ToViewModels(this IEnumerable<GalleryItemIdentifier> identifiers)
    {
        var result = new List<GalleryItemViewModel>();
        int index = 1;

        foreach (var item in identifiers)
        {
            var isLsp7 = string.IsNullOrWhiteSpace(item.TokenId);

            result.Add(new GalleryItemViewModel
            {
                TokenContract = item.TokenContract,
                TokenId = item.TokenId,

                Title = $"{(isLsp7 ? "LSP7" : "LSP8")} #{index}",
                Metadata = $"Contract: {Shorten(item.TokenContract)}, TokenId: {(isLsp7 ? "(empty)" : Shorten(item.TokenId))}",
                ImageUrl = $"assets/nft{(index % 4) + 1}.jpg",

                Liked = false,
                LikeCount = 0,
                Status = "Available"
            });

            index++;
        }

        return result;
    }

    private static string Shorten(string input)
    {
        if (string.IsNullOrWhiteSpace(input) || input.Length < 10)
            return input;
        return $"{input[..6]}…{input[^4..]}";
    }
}