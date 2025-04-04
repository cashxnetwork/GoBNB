import { Heading, Icon, VStack, Wrap } from "@chakra-ui/react";
import { AiOutlineFire } from "react-icons/ai";
import { CiTimer, CiTrophy } from "react-icons/ci";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { formatEther } from "viem";
import { PageWrapper } from "../../../components/PageWrapper";
import { useGetRegistrationsStats } from "../../../hooks/ReferralHooks";
import { MdOutlineGroups } from "react-icons/md";

export const RegistrationStats = () => {
  const registrationStats = useGetRegistrationsStats()?.data;
  console.log("registrationStats", registrationStats);
  const registrationValues = [
    {
      name: "Total Users",
      icon: HiOutlineUserGroup,
      value: registrationStats?.[0] ?? 0n,
      children: "Users"
    },
    {
      name: "Total Registration Value",
      icon: AiOutlineFire,
      value: Number(Number(formatEther(registrationStats?.[1] ?? 0n))).toFixed(
        2
      ),
      children: "USD"
    },
    {
      name: "Referral Reward Distributed",
      icon: CiTrophy,
      value: Number(Number(formatEther(registrationStats?.[2] ?? 0n))).toFixed(
        2
      ),
      children: "USD"
    },
    {
      name: "Weekly Reward Distributed",
      icon: CiTimer,
      value: Number(Number(formatEther(registrationStats?.[3] ?? 0n))).toFixed(
        2
      ),
      children: "USD"
    }
  ];
  return (
    <PageWrapper>
      <Wrap w="full" p={5} justify="center" align="center" spacing={[10, 20]}>
        {registrationValues?.map((valuesObject, key) => {
          return (
            <VStack key={key}>
              <Icon as={valuesObject?.icon} boxSize={20} strokeWidth={2}></Icon>
              <Heading>
                {valuesObject?.value} {valuesObject?.children}
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
