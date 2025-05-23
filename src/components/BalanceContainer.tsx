import {
  Avatar,
  AvatarGroup,
  HStack,
  Tag,
  Text,
  VStack
} from "@chakra-ui/react";
import { supportedCurrencyIcons } from "../constants/SupportedNetworkInfo";

export const BalanceContainer = ({
  heading,
  value,
  currencySymbol,
  showIcon = true,
  icons
}: {
  heading: string;
  value: number | string;
  currencySymbol?: string;
  showIcon?: boolean;
  icons?: string[];
}) => {
  return (
    <VStack>
      <Tag size="lg" borderRadius="xl" fontWeight="bold" fontSize="md">
        {heading}
      </Tag>
      <HStack>
        <Text
          fontSize="lg"
          fontWeight="black"
          textAlign="center"
          color="twitter.500"
        >
          {value} {currencySymbol && currencySymbol.toUpperCase()}
        </Text>
        {showIcon ? (
          icons ? (
            <AvatarGroup size="xs" max={2}>
              {icons?.map((url, key) => {
                return <Avatar name="Currency Icons" src={url} key={key} />;
              })}
            </AvatarGroup>
          ) : (
            <AvatarGroup size="xs" max={2}>
              {supportedCurrencyIcons?.map((url, key) => {
                return <Avatar name="Currency Icons" src={url} key={key} />;
              })}
            </AvatarGroup>
          )
        ) : null}
      </HStack>
    </VStack>
  );
};
