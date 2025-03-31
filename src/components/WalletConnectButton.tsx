import { Button, Icon, useBreakpointValue } from "@chakra-ui/react";
import {
    useAppKit,
    useAppKitAccount,
    useAppKitState
} from "@reown/appkit/react";
import { shortenAddress } from "../utils/web3Functions";
import { SiWalletconnect } from "react-icons/si";

export const WalletConnectButton = () => {
    const { open } = useAppKit();
    const { address } = useAppKitAccount();
    const { open: openState } = useAppKitState();
    const walletText = "Sign In";

    const addressShorted = shortenAddress(
        address as `0x${string}`,
        useBreakpointValue(
            {
                base: 3,
                sm: 4,
                md: 5,
                lg: 6
            },
            {
                fallback: "lg"
            }
        )
    );

    const leftIcon = <Icon as={SiWalletconnect} boxSize={6}></Icon>;

    return (
        <Button
            size="lg"
            borderRadius="full"
            onClick={() => open()}
            fontSize={["sm", "md"]}
            isLoading={openState === true && !address ? true : false}
            loadingText={openState === true && !address && "Connecting"}
            bgColor="black"
            color="white"
            _hover={{
                bgColor: "gray.900"
            }}
            leftIcon={leftIcon}
            fontWeight={900}
        >
            {address ? addressShorted : walletText}
        </Button>
    );
};
