import { createAppKit, useAppKitTheme } from "@reown/appkit/react";

import { useColorMode } from "@chakra-ui/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { AppKitNetwork, bsc } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { WagmiProvider } from "wagmi";
import { projectName } from "../constants/projectConfig";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = "5b5423a72a2c8ad388197b2b2c87bbf3";
if (!projectId) {
    throw new Error("Please set your REOWN_PROJECT_ID in .env");
}
// 1.5. Get projectId from https://cloud.reown.com

// 2. Create a metadata object - optional
const metadata = {
    name: projectName,
    description:
        "A fully #decentralised protocol that distributes rewards for joining the GoBNB network",
    url: "https://gobnb.network", // origin must match your domain & subdomain
    icons: ["https://gobnb.network/projectLogo.png"]
};

// 3. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [bsc];
const selectedBSCRPC =
    "https://virtual.binance.rpc.tenderly.co/8fd48115-891c-40ad-a6af-debbec99bc01";
if (!selectedBSCRPC) {
    throw new Error("Please set your BSC_RPC in .env");
}
// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
    networks,
    // transports: {
    //     [bsc.id]: http(selectedBSCRPC, {
    //         batch: {
    //             batchSize: 1000,
    //             wait: 100
    //         },
    //         retryCount: 5,
    //         retryDelay: 1000,
    //         timeout: 30000 // 30 seconds
    //     })
    // },
    projectId,
    ssr: true
});

// 5. Create modal
createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    features: {
        analytics: true // Optional - defaults to your Cloud configuration
    }
});

export function ProviderReown({ children }: { children: React.ReactNode }) {
    const { setThemeMode } = useAppKitTheme();
    const { colorMode } = useColorMode();

    useEffect(() => {
        setThemeMode(colorMode === "light" ? "light" : "dark");
    }, [colorMode, setThemeMode]);
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
}
