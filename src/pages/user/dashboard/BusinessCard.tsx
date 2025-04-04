import { FcComboChart } from "react-icons/fc";
import { useGetUserBusiness } from "../../../hooks/ReferralHooks";
import { CardContainer } from "../../../components/CardContainer";
import { BalanceContainer } from "../../../components/BalanceContainer";
import { formatEther } from "viem";

function BusinessCard({ userAddress }: { userAddress: `0x${string}` }) {
  const userBusiness = useGetUserBusiness(userAddress)?.data;
  const userValueObject = [
    {
      name: "Self Business",
      value: userBusiness?.[0]
    },
    {
      name: "Direct Business",
      value: userBusiness?.[1]
    },
    {
      name: "Team Business",
      value: userBusiness?.[2]
    },
    {
      name: "Total Business",
      value: userBusiness?.[3]
    }
  ];

  return (
    <CardContainer heading="Business" icon={FcComboChart}>
      {userValueObject.map((valueObject, key) => {
        return (
          <BalanceContainer
            heading={valueObject?.name}
            value={Number(Number(formatEther(valueObject?.value ?? 0))?.toFixed(3))}
            key={key}
          ></BalanceContainer>
        );
      })}
    </CardContainer>
  );
}

export default BusinessCard;
