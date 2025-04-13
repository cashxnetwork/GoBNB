import {
  Divider,
  HStack,
  Heading,
  Icon,
  VStack
} from "@chakra-ui/react";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { FcGoodDecision } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { formatEther } from "viem";
import RegistrationUI from "../../components/RegistrationUI/RegistrationUI";
import UpgradeUI from "../../components/UpgradeUi/UpgradeUi";
import { supportedNetworkInfo } from "../../constants/SupportedNetworkInfo";
import {
  useGetUserBusiness,
  useGetUserLevelToUpgrade,
  useNativePrice,
  useNeedNativeToRegister,
  useUpgradePlans
} from "../../hooks/ReferralHooks";
import { CheckReferrerActive } from "./CheckReferrerActive";

export default function RegistrationPage() {
  const { chainId } = useAppKitNetwork();
  const currentNetwork = supportedNetworkInfo[chainId as number];
  const { address } = useAppKitAccount();
  const { referrerAddress } = useParams<{ referrerAddress: `0x${string}` }>();
  const userBusiness = useGetUserBusiness(address as `0x${string}`);
  const userSelfBusiness = userBusiness?.data?.[0];
  const userLevelToUpgrade = useGetUserLevelToUpgrade(address as `0x${string}`);

  const nativePrice = useNativePrice(
    currentNetwork?.priceOracleAddress as `0x${string}` | undefined
  );
  const upgradePlans = useUpgradePlans();
  const valueToRegister = useNeedNativeToRegister(
    currentNetwork.priceOracleAddress!
  )?.data;

  return (
    <CheckReferrerActive check={userSelfBusiness > 0 ? false : true}>
      <VStack spacing={5} py={100} minH={"100vh"}>
        <VStack>
          <HStack>
            <Icon as={FcGoodDecision} boxSize={10}></Icon>
            <Heading color="orange.500">
              {Number(userSelfBusiness) === 0 ? "Register" : "Upgrade"}
            </Heading>
          </HStack>
          <Divider />
        </VStack>

        {Number(userSelfBusiness) === 0 ? (
          <>
            <RegistrationUI
              referrerAddress={referrerAddress}
              valueInDecimals={Number(formatEther(valueToRegister ?? 0))}
              currentNetwork={currentNetwork}
            ></RegistrationUI>

            {/* <Heading>New User</Heading> */}
          </>
        ) : (
          <>
            <UpgradeUI
              upgradePlan={
                upgradePlans?.data?.[0]?.[
                Number(userLevelToUpgrade?.data?.[0])
                ]
              }
              valueInDecimals={
                upgradePlans?.data
                  ? Number(
                    upgradePlans?.data?.[0]?.[
                      Number(userLevelToUpgrade?.data?.[0])
                    ]?.valueToUpgradeInUSD ?? 0
                  ) / Number(nativePrice?.data ?? 0)
                  : 0
              }
              currentNetwork={currentNetwork}
            ></UpgradeUI>
            {/* <Heading>Old User</Heading> */}
          </>
        )}
      </VStack>
    </CheckReferrerActive>
  );
}
