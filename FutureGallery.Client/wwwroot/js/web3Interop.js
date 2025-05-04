import { createClientUPProvider } from "@lukso/up-provider";
import { BrowserProvider, Contract } from "ethers";
import abi from "../abi/FutureGallery.json";

(function init() {
    window.initF030Lukso = async function(){
        if (typeof window.f030Lukso !== "undefined") {
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
                window.f030Lukso = fallbackF030Lukso(false);
                return;
            }
    
            const getBrowserProvider = () => new BrowserProvider(upProvider);
    
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
                        const contract = new Contract(contractAddress, abi, provider);
    
                        const data = await contract.getGallery(ownerAddress);
                        return {
                            items: data.items,
                            likeCounts: data.likeCounts.map((x) => x.toString()),
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
    
                        const contract = new Contract(contractAddress, abi, signer);
                        const tx = await contract.updateGalleryBulk(galleryItems, {
                            value: 0n // Required for LUKSO Grid
                        });
    
                        console.log("📨 Tx submitted:", tx.hash);
    
                        await tx.wait();
                        console.log("✅ Tx confirmed:", tx.hash);
    
                        return true;
                    } catch (err) {
                        console.error("❌ Failed to save gallery:", err);
                        return false;
                    }
                },
                
                debugWriteTx: async () => {
                    try {
                        const provider = new BrowserProvider(await createClientUPProvider());
                        const signer = await provider.getSigner();

                        const contract = new Contract("0x863382cD5B07e9Cd70f198Dec5D04e4cB90f035c", abi, signer);

                        const tx = await contract.updateGalleryBulk([], { value: 0n });

                        console.log("TX Hash:", tx.hash);
                        const receipt = await tx.wait();
                        console.log("TX Confirmed:", receipt);
                    } catch (err) {
                        console.error("❌ debugWriteTx failed:", err);
                    }
                },
    
                loadMockGalleryItems: async () => {
                    return [
                        { tokenContract: "0xfe256d0fed8cdd0a4d345a90382b414c2867e5f3", tokenId: "" },
                        { tokenContract: "0x287de81261a7c1bc5580cc0e56c41ac2e006e649", tokenId: "0x0000000000000000000000006834737ae1ee538c0e207f4bf7412ec2d9862473" },
                        { tokenContract: "0x5013027d3c266c705f631303e1846f7fb855b290", tokenId: "" },
                        { tokenContract: "0x586b927400b5cc7ecf8cae708fbc22e4ae499527", tokenId: "0x0000000000000000000000000000000000000000000000000000000000000001" }
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
    };
})();