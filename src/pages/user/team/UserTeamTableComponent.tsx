import { Badge, HStack, Tag, Td, Text, Tr, VStack } from "@chakra-ui/react";
import {
  useGetUserLevelToUpgrade,
  useGetUserTeam
} from "../../../hooks/ReferralHooks";
import { shortenAddress } from "../../../utils/web3Functions";
import { AddressActionButtons } from "../../../components/AddressActionButtons";

function UserTeamTableComponent({
  level,
  userAddress
}: {
  level: number;
  userAddress: `0x${string}`;
}) {
  const userTeamObject = useGetUserTeam(userAddress)?.data;
  const userLevelToUpgrade = useGetUserLevelToUpgrade(userAddress);
  const userLevel = Number(userLevelToUpgrade?.data?.[0]);
  return (
    <Tr>
      <Td>{level}</Td>
      <Td gap={2} as={HStack}>
        <VStack>
          <Tag size="lg" borderRadius="xl" as={HStack} position={"relative"}>
            <Text>{shortenAddress(userAddress)}</Text>
            <Badge
              colorScheme="blue"
              position={"absolute"}
              right={-3}
              top={-3}
              p={1}
              borderRadius={"md"}
            >
              L{userLevel + 1}
            </Badge>
            <AddressActionButtons address="userAddress"></AddressActionButtons>
          </Tag>
        </VStack>
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
