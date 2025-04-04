"use client";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import { useNetwork } from "wagmi";
import { Counter } from "../../../components/Counter";
import { supportedNetworkInfo } from "../../../constants/SupportedNetworkInfo";
import {
  useGetWeeklyRewardToBeDistributed,
  useNativePrice
} from "../../../hooks/ReferralHooks";
import { PageWrapper } from "../../../components/PageWrapper";
import { HeadingComponent } from "../../../components/Ui";
import { formatEther } from "viem";

function WeeklyReward() {
  const weeklyRewardsToBeDistributed =
    useGetWeeklyRewardToBeDistributed()?.data;
  const currentNetwork = supportedNetworkInfo[56];
  const nativePrice = useNativePrice(
    currentNetwork?.priceOracleAddress as `0x${string}`
  )?.data;
  const weeklyRewardsToBeDistributedValue =
    Number(
      Number(formatEther(weeklyRewardsToBeDistributed?.[0] ?? 0)) *
      Number(formatEther(nativePrice ?? 0))
    )?.toFixed(2) ?? 0;

  return (
    <PageWrapper>
      <HeadingComponent
        heading="Weekly Rewards to be"
        gradientHeading="DISTRIBUTED"
      ></HeadingComponent>
      <VStack>
        <HStack>
          <Heading>{weeklyRewardsToBeDistributedValue}</Heading>
          <Heading color="orange.500">USDT</Heading>
        </HStack>
      </VStack>
      <VStack>
        <Heading>Remaining Time</Heading>
        <Counter
          timeinseconds={Number(weeklyRewardsToBeDistributed?.[2])}
        ></Counter>
      </VStack>
    </PageWrapper>
  );
}

export default WeeklyReward;
