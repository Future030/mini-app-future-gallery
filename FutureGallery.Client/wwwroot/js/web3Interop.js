import { createClientUPProvider } from "@lukso/up-provider";
import { ethers } from "ethers";
import abi from "../abi/FutureGallery.json";

export async function initF030Lukso() {
    if(typeof window.f030Lukso !== 'undefined') {
        console.warn("⚠️ initF030Lukso already called. Skipping.");
        return;
    }

    function fallbackF030Lukso(isHostedMiniApp) {
        return {
            isHostedMiniApp,
            getVisitorUP: () => null,
            getHostUP: () => null,
            isConnected: () => false,
            registerBlazorInterop: () => {},
            getGallery: async () => null,
            saveGallery: async () => false,
            loadMockGalleryItems: async () => []
        };
    }
    
    try {
        window.addEventListener("unhandledrejection", function (event) {
            const message = event.reason?.message || event.reason;

            if (typeof message === "string" && message.includes("No UP found")) {
                console.warn("⚠️ Suppressed known benign UP Provider error: 'No UP found'");
                event.preventDefault(); // suppress default console logging
            }
        });
        
        const upProvider = await createClientUPProvider();

        const hosted = upProvider.isMiniApp;

        if (!hosted) {
            console.warn("⚠️ Not running as hosted mini-app — skipping UP provider init.");
            window.f030Lukso = fallbackLukso(false);
            return;
        }

        const getBrowserProvider = () =>
            new ethers.BrowserProvider(upProvider.ethereum ?? upProvider);

        window.f030Lukso = {
            isHostedMiniApp: true,

            getVisitorUP: () => upProvider.accounts?.[0] || null,
            getHostUP: () => upProvider.contextAccounts?.[0] || null,
            isConnected: () => upProvider.profileConnected || false,

            registerBlazorInterop: (dotNetRef, onVisitorUPChangedCallbackName, onHostUPChangedCallbackName) => {
                if (!dotNetRef) return;

                upProvider.on("accountsChanged", (accounts) => {
                    console.log("🔄 VisitorUP changed:", accounts);
                    dotNetRef.invokeMethodAsync(onVisitorUPChangedCallbackName);
                });

                upProvider.on("contextAccountsChanged", (contextAccounts) => {
                    console.log("🔄 HostUP changed:", contextAccounts);
                    dotNetRef.invokeMethodAsync(onHostUPChangedCallbackName);
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

            loadMockGalleryItems: async () => {
                return [
                    {
                        tokenContract: "0x1234567890abcdef1234567890abcdef12345678",
                        tokenId: "" // LSP7
                    },
                    {
                        tokenContract: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
                        tokenId: "0x" + "1".padStart(64, "0") // LSP8
                    },
                    {
                        tokenContract: "0x99887766554433221100ffeeddccbbaa11223344",
                        tokenId: "" // LSP7
                    },
                    {
                        tokenContract: "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
                        tokenId: "0x" + "abc".padStart(64, "0") // LSP8
                    }
                ];
            }
        };

        console.log("🧑 VisitorUP:", window.f030Lukso.getVisitorUP());
        console.log("🏠 HostUP:", window.f030Lukso.getHostUP());
        console.log("🔌 Connected:", window.f030Lukso.isConnected());

    } catch (err) {
        console.warn("⚠️ Failed to initialize UP provider or not running as mini-app:", err);
        window.f030Lukso = fallbackF030Lukso(false);
    }
}