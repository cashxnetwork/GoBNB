import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Input,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react';
import {
  FcAssistant,
  FcConferenceCall,
  FcDown,
  FcReadingEbook,
  FcVoicePresentation,
} from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import {
  useGetUserBusiness,
  useGetUserTeam,
} from '../../../hooks/ReferralHooks';
import UserTeamTable from './UserTeamTable';
import UserTeamDisplayCard from '../../../components/UserTeamDisplayCard';
import { zeroAddress } from 'viem';

function Team() {
  const { address } = useAccount();
  const { userAddress } = useParams<{
    userAddress: `0x${string}`;
  }>();
  const currentUserAddress = userAddress ?? address;
  const userBusiness = useGetUserBusiness(currentUserAddress)?.data;
  const userSelfBusiness = userBusiness?.[0];
  const userTeamObject = useGetUserTeam(currentUserAddress)?.data;
  console.log("userTeamObject", userTeamObject)
  const userReferrer = userTeamObject?.[0] as `0x${string}`;
  const userReferee = userTeamObject?.[1] as `0x${string}`[];
  const userRefereeCount = Number(userTeamObject?.[2]);
  const isUserActive = Number(userSelfBusiness) > 0 ? true : false;
  const websiteURL = `${window.origin}`;
  const userReferralLink = `${websiteURL}/#/registration/${address}`;
  const { hasCopied, onCopy } = useClipboard(userReferralLink);
  return (
    <VStack w="full" spacing={10}>
      <VStack>
        <HStack>
          <Icon as={FcConferenceCall} boxSize={10}></Icon>
          <Heading color="orange.500">Team</Heading>
        </HStack>
        <Divider></Divider>
      </VStack>
      <VStack>
        <Heading>Your referral link</Heading>
        <VStack>
          <Input
            defaultValue={
              isUserActive ? userReferralLink : 'User is not active'
            }
            borderRadius="xl"
            color={!isUserActive ? 'red' : ''}
            isReadOnly
          ></Input>
          <Button
            w="full"
            borderRadius="xl"
            onClick={onCopy}
            rightIcon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            isDisabled={!isUserActive}
          >
            {hasCopied ? 'Referral Link Copied' : 'Copy Referral Link'}
          </Button>
        </VStack>
      </VStack>
      <VStack>
        {userReferrer !== zeroAddress && (
          <VStack>
            <UserTeamDisplayCard
              address={userReferrer}
              icon={FcReadingEbook}
              userType="Referrer"
            />
            <Icon as={FcDown} boxSize={10}></Icon>
          </VStack>
        )}

        <VStack>
          <UserTeamDisplayCard
            address={currentUserAddress}
            icon={FcAssistant}
            userType="You"
          />
        </VStack>
        <Icon as={FcDown} boxSize={10}></Icon>
        {userRefereeCount > 0 ? (
          <Wrap w="full" justify="center" align="center">
            {userReferee.map(
              (address: `0x${string}`, key: number) => {
                return (
                  <UserTeamDisplayCard
                    address={address}
                    icon={FcVoicePresentation}
                    userType="Referee"
                    key={key}
                  />
                );
              }
            )}
          </Wrap>
        ) : (
          <Heading size="md" textAlign="center" color="red">
            You have no team yet.
          </Heading>
        )}
      </VStack>
      {userRefereeCount > 0 && (
        <VStack w="full" spacing={10}>
          <Divider />
          <VStack>
            <Heading size="md" color="orange.500">
              All Team
            </Heading>
            <Divider />
          </VStack>
          <UserTeamTable userAddress={currentUserAddress!} />
        </VStack>
      )}
    </VStack>
  );
}

export default Team;
