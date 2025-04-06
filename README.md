# 🎨 FutureGallery – A Mini dApp for the LUKSO Grid

**FutureGallery** is a fully client-side Blazor WebAssembly app built for the **LUKSO Grid**. It enables Universal Profile (UP) owners to showcase up to 6 NFTs (LSP7 or LSP8), curated and reordered via a beautiful drag-and-drop interface. Visitors can view and interact with the gallery by liking and unliking items.

## 🧠 Key Features

- **Edit Mode** (Host Only):
    - Select & reorder up to 6 NFTs
    - Drag-and-drop interaction
    - Temporary changes until "Save"
    - Atomic update via `updateGalleryBulk(...)`

- **View Mode** (Visitor):
    - See NFTs and metadata
    - Like/unlike each item
    - Live like count and status

- **Featured Content Slider**:
    - Curated by the FutureGallery team
    - Highlights profiles, NFTs, or other dApps

## ⚙️ Tech Stack

| Layer            | Technology                  |
|------------------|-----------------------------|
| Frontend         | Blazor WebAssembly (.NET 8) |
| UI Components    | Radzen Blazor Pro           |
| Web3 Integration | ethers.js, @lukso/up-provider |
| Metadata         | erc725.js, lsp-utils        |
| Smart Contract   | Solidity (LUKSO Testnet)    |
| Hosting          | GitHub Pages / IPFS         |

## 📁 Folder Structure