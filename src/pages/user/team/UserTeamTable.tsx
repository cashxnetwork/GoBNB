import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useGetUserTeam } from '../../../hooks/ReferralHooks';
import UserTeamTableComponent from './UserTeamTableComponent';

function UserTeamTable({ userAddress }: { userAddress: `0x${string}` }) {
  const userTeamObject = useGetUserTeam(userAddress)?.data;
  const userTeam = userTeamObject?.[5];
  const userTeamCount = Number(userTeamObject?.[6]);
  return (
    <TableContainer
      w="full"
      bgColor={useColorModeValue('white', 'gray.900')}
      borderRadius="50px"
      minH={150}
    >
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Level</Th>
            <Th>Address</Th>
            <Th isNumeric>Referred By</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userTeamCount > 0 ? (
            userTeam.map((team, key: number) => {
              const userTeamAddress = team?.teamMember as `0x${string}`;
              const userTeamLevel = Number(team?.level);
              return (
                <UserTeamTableComponent
                  key={key}
                  level={userTeamLevel}
                  userAddress={userTeamAddress}
                ></UserTeamTableComponent>
              );
            })
          ) : (
            <Heading size="sm" color="red">
              No team
            </Heading>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default UserTeamTable;
