import { Flex, HStack, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Logo } from "../Logo";
import { WalletConnectButton } from "../WalletConnectButton";
import MenuButtonComponent from "./MenuButtonComponent";

export const Nav = () => {
    return (
        <HStack
            w="full"
            py={5}
            px={2}
            h={70}
            borderRadius={"2xl"}
            color="black"
            spacing={1}
            boxShadow={"base"}
            position={"sticky"}
            top={0}
            zIndex={111}
            backdropFilter={"blur(20px)"}
        >
            <Flex maxW={20} bgColor="black" borderRadius={"full"} p={2}>
                <Logo />
            </Flex>
            <Spacer></Spacer>
            <ColorModeSwitcher />
            <WalletConnectButton />
            <MenuButtonComponent />
        </HStack>
    );
};
