import { Heading, Icon, VStack, Wrap } from '@chakra-ui/react';
import { AiOutlineFire } from 'react-icons/ai';
import { CiTimer } from 'react-icons/ci';
import { HiUserGroup } from 'react-icons/hi';
import { useGetRegistrationsStats } from '../../../hooks/ReferralHooks';
import { PageWrapper } from '../../../components/PageWrapper';

export const RegistrationStats = () => {
  const registrationStats = useGetRegistrationsStats();
  const registrationValues = [
    {
      name: 'Total Registration Value',

      icon: AiOutlineFire,
    },
    {
      name: 'Referral Reward Distributed',
      icon: HiUserGroup,
    },
    {
      name: 'Weekly Reward Distributed',
      icon: CiTimer,
    },
  ];
  return (
    <PageWrapper>
      <Wrap w="full" p={5} justify="center" align="center" spacing={[10, 20]}>
        {registrationValues?.map((valuesObject, key) => {
          return (
            <VStack key={key}>
              <Icon as={valuesObject?.icon} boxSize={20}></Icon>
              <Heading>
                {Number(
                  Number(registrationStats?.[key + 1]) / 10 ** 18
                )?.toFixed(2)}{' '}
                USDT
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
