import { Badge, HStack, Tag, Td, Tr } from '@chakra-ui/react';
import { useGetUserTeam } from '../../../hooks/ReferralHooks';
import { shortenAddress } from '../../../utils/web3Functions';

function UserTeamTableComponent({
  level,
  userAddress,
}: {
  level: number;
  userAddress: `0x${string}`;
}) {
  const userTeamObject = useGetUserTeam(userAddress)?.data;
  return (
    <Tr>
      <Td>{level}</Td>
      <Td gap={2} as={HStack}>
        <Tag size="lg" borderRadius="xl">
          {shortenAddress(userAddress)}
        </Tag>
        <Badge colorScheme='green'>L{level}</Badge>
      </Td>
      <Td isNumeric>
        <Tag size="lg" borderRadius="xl">
          {shortenAddress(userTeamObject?.[0] as `0x${string}`)}
        </Tag>

      </Td>
    </Tr>
  );
}

export default UserTeamTableComponent;
