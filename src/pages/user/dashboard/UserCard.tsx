import { Divider, Heading } from "@chakra-ui/react";
import { RiUser6Fill } from "react-icons/ri";
import { formatEther } from "viem";
import { CardContainer } from "../../../components/CardContainer";
import {
  useGetUserLevelToUpgrade,
  useGetUserRewards
} from "../../../hooks/ReferralHooks";

export const UserCard = ({ userAddress }: { userAddress: `0x${string}` }) => {
  const userRewards = useGetUserRewards(userAddress);
  const userLevelToUpgrade = useGetUserLevelToUpgrade(userAddress);
  const userAllRewards = userRewards?.data?.[3];
  const userLevel = Number(userLevelToUpgrade?.data?.[0]);
  return (
    <CardContainer heading="Hey Welcome!" icon={RiUser6Fill}>
      <Heading textAlign="center">You have earned</Heading>
      <Heading color="yellow.500">
        ${Number(formatEther(userAllRewards ?? BigInt(0)))?.toFixed(2)}
      </Heading>
      <Divider></Divider>
      <Heading>Level</Heading>
      <Heading>{userLevel + 1}</Heading>
    </CardContainer>
  );
};
