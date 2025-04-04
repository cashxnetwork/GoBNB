import { VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { isAddressValid } from '../../utils/web3Functions';
import { RegistrationErrorPage } from './RegistrationErrorPage';

export const CheckIfReferrerAddressValid = ({
  children,
  check,
}: {
  children: ReactNode;
  check: boolean;
}) => {
  const { referrerAddress } = useParams();

  return (
    <VStack w="full">
      {check ? (
        referrerAddress ? (
          isAddressValid(referrerAddress) ? (
            children
          ) : (
            <RegistrationErrorPage errorReason="Referrer address wrong. Please check it again"></RegistrationErrorPage>
          )
        ) : (
          <RegistrationErrorPage errorReason="You need referrer address to register."></RegistrationErrorPage>
        )
      ) : (
        children
      )}
    </VStack>
  );
};
