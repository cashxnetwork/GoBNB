import { FcScatterPlot } from "react-icons/fc";
import { useGetUserRewards } from "../../../hooks/ReferralHooks";
import { CardContainer } from "../../../components/CardContainer";
import { BalanceContainer } from "../../../components/BalanceContainer";
import { formatEther } from "viem";

export default function RewardsCard({
  userAddress
}: {
  userAddress: `0x${string}`;
}) {
  const userRewardsObject = useGetUserRewards(userAddress)?.data;

  const userValueObject = [
    {
      name: "Referral Rewards",
      value: userRewardsObject?.[0]
    },
    {
      name: "Weekly Rewards",
      value: userRewardsObject?.[1]
    },
    {
      name: "Upgrade Rewards",
      value: userRewardsObject?.[2]
    },
    {
      name: "Total Rewards",
      value: userRewardsObject?.[3]
    }
  ];

  return (
    <CardContainer heading="Rewards" icon={FcScatterPlot}>
      {userValueObject?.map((valueObject, key) => {
        return (
          <BalanceContainer
            key={key}
            heading={valueObject?.name}
            value={Number(formatEther(valueObject?.value ?? 0))}
          ></BalanceContainer>
        );
      })}
    </CardContainer>
  );
}
