import { Flex, HStack, Spacer } from "@chakra-ui/react";
import { Menu as MenuIcon } from "lucide-react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Logo } from "../Logo";
import { WalletConnectButton } from "../WalletConnectButton";

export const Nav = () => {
    return (
        <HStack
            w="full"
            py={5}
            px={2}
            h={70}
            bgColor={"yellow.500"}
            borderRadius={"2xl"}
            color="black"
            spacing={1}
            boxShadow={"base"}
            position={"sticky"}
            top={0}
            zIndex={111}
        >
            <Flex maxW={20} bgColor="black" borderRadius={"full"} p={2}>
                <Logo />
            </Flex>
            <Spacer></Spacer>
            <ColorModeSwitcher />
            <WalletConnectButton />
            <MenuIcon strokeWidth={5} size={"25px"} cursor={"pointer"} />
        </HStack>
    );
};
