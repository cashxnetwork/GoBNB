'use client';
import { VStack } from '@chakra-ui/react';
import { AboutUs } from './AboutUs/AboutUs';
import { Features } from './Features/Features';
import { Header } from './Header';
import { NetworkJoining } from './NetworkJoining/NetworkJoining';
import { PlanDiscriptionComponent } from './PlanDiscriptionComponent/PlanDiscriptionComponent';
import { PowerOfBlockchainComponent } from './PowerOfBlockchainComponent/PowerOfBlockchainComponent';
import { RegistrationStats } from './RegistrationStats/RegistrationStats';
import { Roadmap } from './Roadmap/Roadmap';
import { SupportedChainComponent } from './SupportedChainComponent';
import { Tokenomics } from './Tokenomics/Tokenomics';
import WeeklyReward from './WeeklyReward/WeeklyReward';
import { LatestUserRegistrations } from './LatestUserRegistrations/LatestUserRegistrations';

export const Home = () => {
  return (
    <VStack w="full" minH={'100vh'} pt={20} overflow="hidden">
      <Header />
      <RegistrationStats />
      <WeeklyReward />
      <SupportedChainComponent />
      <PlanDiscriptionComponent />
      <AboutUs />
      <Features />
      <NetworkJoining />
      <LatestUserRegistrations />
      {/* <Tokenomics /> */}
      {/* <Roadmap /> */}
      {/* <TokenDistribution /> */}
      <PowerOfBlockchainComponent />
    </VStack>
  );
};
