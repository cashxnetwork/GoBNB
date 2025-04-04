import { FcConferenceCall } from "react-icons/fc";
import { useGetUserTeam } from "../../../hooks/ReferralHooks";
import { CardContainer } from "../../../components/CardContainer";
import { BalanceContainer } from "../../../components/BalanceContainer";

function TeamCard({ userAddress }: { userAddress: `0x${string}` }) {
  const userTeamObject = useGetUserTeam(userAddress)?.data;
  const userValueObject = [
    {
      name: "Direct Team",
      value: userTeamObject?.[2]
    },
    {
      name: "Team Assigned",
      value: userTeamObject?.[4]
    },
    {
      name: "Total Team",
      value: userTeamObject?.[6]
    }
  ];

  return (
    <CardContainer heading="Team" icon={FcConferenceCall}>
      {userValueObject.map((valueObject, key) => {
        return (
          <BalanceContainer
            heading={valueObject?.name}
            value={Number(valueObject?.value ?? 0)}
            key={key}
            showIcon={false}
          ></BalanceContainer>
        );
      })}
    </CardContainer>
  );
}

export default TeamCard;
