import { Divider, Heading } from "@chakra-ui/react";
import React from "react";
import { RiUser6Fill } from "react-icons/ri";
import {
  useGetUserLevelToUpgrade,
  useGetUserRewards
} from "../../../hooks/ReferralHooks";
import { CardContainer } from "../../../components/CardContainer";
import { formatEther } from "viem";

export const UserCard = ({ userAddress }: { userAddress: `0x${string}` }) => {
  const userRewards = useGetUserRewards(userAddress);
  const userLevelToUpgrade = useGetUserLevelToUpgrade(userAddress);
  const userAllRewards = userRewards?.data?.[3];
  const userLevel = Number(userLevelToUpgrade?.data?.[0]);
  return (
    <CardContainer heading="Hey Welcome!" icon={RiUser6Fill}>
      <Heading textAlign="center">You have earned</Heading>
      <Heading color="yellow.500">
        ${Number(formatEther(userAllRewards))?.toFixed(2)}
      </Heading>
      <Divider></Divider>
      <Heading>Level</Heading>
      <Heading>{userLevel + 1}</Heading>
    </CardContainer>
  );
};
