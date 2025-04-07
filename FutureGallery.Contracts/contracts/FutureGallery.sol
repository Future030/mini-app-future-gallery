// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FutureGallery {
    // A GalleryItem represents one entry in a user's gallery.
    // For LSP8 tokens, tokenId is a bytes32 unique identifier.
    // For LSP7 tokens, you can use bytes32(0) as a default.
    struct GalleryItem {
        address tokenContract;
        bytes32 tokenId;
    }

    // Each user's gallery is stored as a dynamic array of GalleryItem.
    mapping(address => GalleryItem[]) private galleries;

    // A pointer mapping to quickly locate an item in a user's gallery.
    // itemIndex[owner][itemKey] stores the index+1 (so that 0 means "not present").
    mapping(address => mapping(bytes32 => uint256)) private itemIndex;

    // Tracking likes using a composite key.
    // likes[galleryOwner][itemKey] holds the total like count for that item.
    mapping(address => mapping(bytes32 => uint256)) public likes;
    // hasLiked[galleryOwner][itemKey][liker] indicates whether a specific address has liked that item.
    mapping(address => mapping(bytes32 => mapping(address => bool))) public hasLiked;

    // Structure to bundle gallery data for a view call.
    struct GalleryData {
        GalleryItem[] items;
        uint256[] likeCounts;
        bool[] likedByCaller;
    }

    // Events for logging bulk updates and like/unlike actions.
    event GalleryBulkUpdated(address indexed user);
    event ItemLiked(address indexed owner, address tokenContract, bytes32 tokenId, uint256 newLikeCount);
    event ItemUnliked(address indexed owner, address tokenContract, bytes32 tokenId, uint256 newLikeCount);

    /**
     * @notice Bulk update the caller's gallery.
     * @param items An array of GalleryItem representing the desired selection and order.
     */
    function updateGalleryBulk(GalleryItem[] calldata items) external {
        // Clear the existing gallery.
        delete galleries[msg.sender];

        // Rebuild the gallery and the pointer mapping.
        for (uint256 i = 0; i < items.length; i++) {
            galleries[msg.sender].push(items[i]);
            bytes32 key = _getItemKey(items[i]);
            itemIndex[msg.sender][key] = i + 1; // store index+1 so that 0 means not present
        }
        emit GalleryBulkUpdated(msg.sender);
    }

    /**
     * @dev Internal helper to compute a composite key for a gallery item.
     * The key is based on tokenContract and tokenId.
     */
    function _getItemKey(GalleryItem memory item) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(item.tokenContract, item.tokenId));
    }

    /**
     * @notice Like a gallery item for a given owner.
     * @param owner The address of the gallery owner.
     * @param tokenContract The token contract address identifying the item.
     * @param tokenId The token identifier (for LSP8 tokens; for LSP7, typically bytes32(0)).
     */
    function likeItem(
        address owner,
        address tokenContract,
        bytes32 tokenId
    ) external {
        bytes32 key = keccak256(abi.encodePacked(tokenContract, tokenId));
        uint256 pointer = itemIndex[owner][key];
        require(pointer > 0, "Item not in gallery");
        require(!hasLiked[owner][key][msg.sender], "Already liked");

        likes[owner][key] += 1;
        hasLiked[owner][key][msg.sender] = true;
        emit ItemLiked(owner, tokenContract, tokenId, likes[owner][key]);
    }

    /**
     * @notice Unlike a gallery item for a given owner.
     * @param owner The address of the gallery owner.
     * @param tokenContract The token contract address identifying the item.
     * @param tokenId The token identifier.
     */
    function unlikeItem(
        address owner,
        address tokenContract,
        bytes32 tokenId
    ) external {
        bytes32 key = keccak256(abi.encodePacked(tokenContract, tokenId));
        uint256 pointer = itemIndex[owner][key];
        require(pointer > 0, "Item not in gallery");
        require(hasLiked[owner][key][msg.sender], "Not liked yet");

        likes[owner][key] -= 1;
        hasLiked[owner][key][msg.sender] = false;
        emit ItemUnliked(owner, tokenContract, tokenId, likes[owner][key]);
    }

    /**
     * @notice Retrieve the complete gallery data for a given owner.
     * Returns a GalleryData struct containing:
     * - The ordered list of GalleryItems.
     * - The like counts for each item.
     * - A flag for each item indicating whether the caller has liked it.
     * @param owner The address whose gallery is being retrieved.
     */
    function getGallery(address owner) external view returns (GalleryData memory) {
        uint256 length = galleries[owner].length;
        GalleryItem[] memory items = new GalleryItem[](length);
        uint256[] memory likeCounts = new uint256[](length);
        bool[] memory likedByCaller = new bool[](length);

        for (uint256 i = 0; i < length; i++) {
            GalleryItem memory item = galleries[owner][i];
            items[i] = item;
            bytes32 key = _getItemKey(item);
            likeCounts[i] = likes[owner][key];
            likedByCaller[i] = hasLiked[owner][key][msg.sender];
        }
        return GalleryData(items, likeCounts, likedByCaller);
    }
}