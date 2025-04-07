import { createClientUPProvider } from "@lukso/up-provider";

let up;

async function init() {
    if (typeof window === "undefined") return;

    try {
        up = await createClientUPProvider();

        const getVisitorUP = () => up.accounts?.[0] || null;
        const getHostUP = () => up.contextAccounts?.[0] || null;
        const isConnected = () => up.profileConnected || false;

        window.lukso = {
            getVisitorUP,
            getHostUP,
            isConnected,
            registerBlazorInterop: (dotNetRef) => {
                if (!dotNetRef) return;

                up.on("accountsChanged", (accounts) => {
                    console.log("🔄 VisitorUP changed:", accounts);
                    dotNetRef.invokeMethodAsync("OnVisitorUpChanged");
                });

                up.on("contextAccountsChanged", (contextAccounts) => {
                    console.log("🔄 HostUP changed:", contextAccounts);
                    dotNetRef.invokeMethodAsync("OnHostUpChanged");
                });
            }
        };

        console.log("🧑 VisitorUP:", getVisitorUP());
        console.log("🏠 HostUP:", getHostUP());
        console.log("🔌 Connected:", isConnected());

    } catch (err) {
        console.warn("⚠️ Not running inside LUKSO Grid or failed to init.");
        window.lukso = {
            getVisitorUP: () => null,
            getHostUP: () => null,
            isConnected: () => false,
            registerBlazorInterop: () => {}
        };
    }
}

init();