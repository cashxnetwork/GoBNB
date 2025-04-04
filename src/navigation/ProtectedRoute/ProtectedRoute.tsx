'use client';
import { VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useAccount } from 'wagmi';
import NoWalletComponent from './NoWalletComponent';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { address } = useAccount();

  return (
    <VStack w="full" minH="100vh" justify="center">
      {!address ? (
        <NoWalletComponent />
      ) : (
        children
      )}
    </VStack>
  );
}

export default ProtectedRoute;
