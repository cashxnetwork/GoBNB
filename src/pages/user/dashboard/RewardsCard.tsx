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
      value: formatEther(userRewardsObject?.[0])
    },
    {
      name: "Weekly Rewards",
      value: formatEther(userRewardsObject?.[1])
    },
    {
      name: "Upgrade Rewards",
      value: formatEther(userRewardsObject?.[2])
    },
    {
      name: "Total Rewards",
      value: formatEther(userRewardsObject?.[3])
    }
  ];

  return (
    <CardContainer heading="Rewards" icon={FcScatterPlot}>
      {userValueObject?.map((valueObject, key) => {
        return (
          <BalanceContainer
            key={key}
            heading={valueObject?.name}
            value={Number(valueObject?.value)?.toFixed(2)}
          ></BalanceContainer>
        );
      })}
    </CardContainer>
  );
}
