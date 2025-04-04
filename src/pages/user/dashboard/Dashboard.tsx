'use client';
import { Divider, HStack, Heading, Icon, VStack, Wrap } from '@chakra-ui/react';
import { useAppKitAccount } from '@reown/appkit/react';
import { FcAreaChart } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { UserCard } from './UserCard';
import BalanceCard from './BalanceCard';
import BusinessCard from './BusinessCard';
import RewardsCard from './RewardsCard';
import TeamCard from './TeamCard';

function Dashboard() {
  const { userAddress } = useParams<{ userAddress: `0x${string}` }>();
  const { address } = useAppKitAccount();

  const currentUserAddress = userAddress ? userAddress : address as `0x${string}`;
  return (
    <VStack w="full" direction="column" gap={10}>
      <VStack>
        <HStack>
          <Icon as={FcAreaChart} boxSize={10}></Icon>
          <Heading color="orange.500">Dashboard</Heading>
        </HStack>
        <Divider></Divider>
      </VStack>
      <Wrap w="full" justify="center" spacing={5}>
        <UserCard userAddress={currentUserAddress}></UserCard>
        {/* <LimitCard
          userAddress={currentUserAddress}
        ></LimitCard> */}
        <BalanceCard
          userAddress={currentUserAddress}
        ></BalanceCard>
        <BusinessCard
          userAddress={currentUserAddress}
        ></BusinessCard>
        <RewardsCard
          userAddress={currentUserAddress}
        ></RewardsCard>
        <TeamCard userAddress={currentUserAddress} />
      </Wrap>
    </VStack>
  );
}

export default Dashboard;
