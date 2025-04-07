import { createClientUPProvider } from "@lukso/up-provider";
import { ethers } from "ethers";
import abi from "../abi/FutureGallery.json";

window.addEventListener("unhandledrejection", function (event) {
    const message = event.reason?.message || event.reason;

    if (typeof message === "string" && message.includes("No UP found")) {
        console.warn("⚠️ Suppressed known benign UP Provider error: 'No UP found'");
        event.preventDefault(); // suppress default console logging
    }
});

async function init() {
    try {
        const upProvider = await createClientUPProvider();

        const hosted = upProvider.isMiniApp;

        if (!hosted) {
            console.warn("⚠️ Not running as hosted mini-app — skipping UP provider init.");
            window.lukso = fallbackLukso(false);
            return;
        }

        const getBrowserProvider = () =>
            new ethers.BrowserProvider(upProvider.ethereum ?? upProvider);

        window.lukso = {
            isHostedMiniApp: true,

            getVisitorUP: () => upProvider.accounts?.[0] || null,
            getHostUP: () => upProvider.contextAccounts?.[0] || null,
            isConnected: () => upProvider.profileConnected || false,

            registerBlazorInterop: (dotNetRef) => {
                if (!dotNetRef) return;

                upProvider.on("accountsChanged", (accounts) => {
                    console.log("🔄 VisitorUP changed:", accounts);
                    dotNetRef.invokeMethodAsync("OnVisitorUpChanged");
                });

                upProvider.on("contextAccountsChanged", (contextAccounts) => {
                    console.log("🔄 HostUP changed:", contextAccounts);
                    dotNetRef.invokeMethodAsync("OnHostUpChanged");
                });
            },

            getGallery: async (contractAddress, ownerAddress) => {
                try {
                    const provider = getBrowserProvider();
                    const contract = new ethers.Contract(contractAddress, abi, provider);

                    const data = await contract.getGallery(ownerAddress);
                    return {
                        items: data.items,
                        likeCounts: data.likeCounts.map(x => x.toString()),
                        likedByCaller: data.likedByCaller
                    };
                } catch (err) {
                    console.error("❌ Failed to fetch gallery:", err);
                    return null;
                }
            },

            saveGallery: async (contractAddress, galleryItems) => {
                try {
                    console.log("🧪 Contract Address before signer usage:", contractAddress);

                    const provider = getBrowserProvider();
                    const signer = await provider.getSigner();
                    console.log("🧪 Signer address:", await signer.getAddress());

                    const contract = new ethers.Contract(contractAddress, abi, signer);
                    const tx = await contract.updateGalleryBulk(galleryItems);
                    await tx.wait();

                    return true;
                } catch (err) {
                    console.error("❌ Failed to save gallery:", err);
                    return false;
                }
            },

            loadMockNfts: async () => {
                return [
                    {
                        title: "WAVES",
                        metadata: "Artist: Luma | Edition 1/10",
                        imageUrl: "assets/nft1.jpg",
                        likeCount: 42,
                        liked: false,
                        status: "Available"
                    },
                    {
                        title: "NEON BLOOM",
                        metadata: "Artist: Jay | Edition 3/10",
                        imageUrl: "assets/nft2.jpg",
                        likeCount: 12,
                        liked: false,
                        status: "Available"
                    },
                    {
                        title: "THE DREAMER",
                        metadata: "Artist: Sora | Edition 1/1",
                        imageUrl: "assets/nft3.jpg",
                        likeCount: 7,
                        liked: false,
                        status: "Available"
                    },
                    {
                        title: "DARKNET",
                        metadata: "Artist: Meka | Edition 5/10",
                        imageUrl: "assets/nft4.jpg",
                        likeCount: 66,
                        liked: false,
                        status: "Available"
                    }
                ];
            }
        };

        console.log("🧑 VisitorUP:", window.lukso.getVisitorUP());
        console.log("🏠 HostUP:", window.lukso.getHostUP());
        console.log("🔌 Connected:", window.lukso.isConnected());

    } catch (err) {
        console.warn("⚠️ Failed to initialize UP provider or not running as mini-app:", err);
        window.lukso = fallbackLukso(false);
    }
}

function fallbackLukso(isHostedMiniApp) {
    return {
        isHostedMiniApp,
        getVisitorUP: () => null,
        getHostUP: () => null,
        isConnected: () => false,
        registerBlazorInterop: () => {},
        getGallery: async () => null,
        saveGallery: async () => false,
        loadMockNfts: async () => []
    };
}

init();