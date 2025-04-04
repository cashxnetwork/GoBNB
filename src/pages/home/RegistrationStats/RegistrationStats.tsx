import { Heading, Icon, VStack, Wrap } from "@chakra-ui/react";
import { AiOutlineFire } from "react-icons/ai";
import { CiTimer } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi";
import { useGetRegistrationsStats } from "../../../hooks/ReferralHooks";
import { PageWrapper } from "../../../components/PageWrapper";
import { formatEther } from "viem";

export const RegistrationStats = () => {
  const registrationStats = useGetRegistrationsStats()?.data;
  console.log("registrationStats", registrationStats);
  const registrationValues = [
    {
      name: "Total Users",
      icon: AiOutlineFire,
      value: registrationStats?.[0],
      children: "Users"
    },
    {
      name: "Total Registration Value",
      icon: AiOutlineFire,
      value: registrationStats?.[1],
      children: "USD"
    },
    {
      name: "Referral Reward Distributed",
      icon: HiUserGroup,
      value: registrationStats?.[2],
      children: "USD"
    },
    {
      name: "Weekly Reward Distributed",
      icon: CiTimer,
      value: registrationStats?.[3],
      children: "USD"
    }
  ];
  return (
    <PageWrapper>
      <Wrap w="full" p={5} justify="center" align="center" spacing={[10, 20]}>
        {registrationValues?.map((valuesObject, key) => {
          return (
            <VStack key={key}>
              <Icon as={valuesObject?.icon} boxSize={20}></Icon>
              <Heading>
                {Number(Number(formatEther(valuesObject?.value)))}{" "}
                {valuesObject?.children}
              </Heading>
              <Heading size="sm" w={150} textAlign="center">
                {valuesObject?.name}
              </Heading>
            </VStack>
          );
        })}
      </Wrap>
    </PageWrapper>
  );
};
