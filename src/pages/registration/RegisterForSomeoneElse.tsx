import {
    Button,
    Divider,
    Heading,
    HStack,
    Icon,
    VStack
} from "@chakra-ui/react";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { FcGoodDecision } from "react-icons/fc";
import { Link, useParams } from "react-router-dom";
import { formatEther } from "viem";
import RegistrationUIAny from "../../components/RegistrationUI/RegistrationUIAny";
import { supportedNetworkInfo } from "../../constants/SupportedNetworkInfo";
import { useNeedNativeToRegister } from "../../hooks/ReferralHooks";

export const RegisterForSomeoneElse = () => {
    const { chainId } = useAppKitNetwork();
    const currentNetwork = supportedNetworkInfo[chainId as number];
    const { referrerAddress } = useParams<{ referrerAddress: `0x${string}` }>();
    const { address } = useAppKitAccount();
    const valueToRegister = useNeedNativeToRegister(
        currentNetwork.priceOracleAddress!
    )?.data;
    return (
        <VStack spacing={5} py={100} minH={"100vh"}>
            <VStack>
                <HStack>
                    <Icon as={FcGoodDecision} boxSize={10}></Icon>
                    <Heading color="orange.500">Register your friend</Heading>
                </HStack>
                <Divider />
            </VStack>
            <Button as={Link} to={`/registration/${referrerAddress}`}>
                Register yourself
            </Button>
            <RegistrationUIAny
                userAddress={address as `0x${string}`}
                referrerAddress={referrerAddress}
                valueInDecimals={Number(formatEther(valueToRegister ?? 0))}
                currentNetwork={currentNetwork}
            ></RegistrationUIAny>
        </VStack>
    );
};
