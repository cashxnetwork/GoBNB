'use client';
import { VStack } from '@chakra-ui/react';
import { useAppKitAccount } from '@reown/appkit/react';
import { ReactNode } from 'react';
import NoWalletComponent from './NoWalletComponent';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { address } = useAppKitAccount();

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
