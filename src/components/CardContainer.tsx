import {
  Divider,
  HStack,
  Icon,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { CenterComponent } from './Ui';

export const CardContainer = ({
  children,
  heading,
  icon,
}: {
  children: ReactNode;
  heading: string;
  icon: IconType;
}) => {
  return (
    <CenterComponent
      style={{
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        w: 250,
      }}
    >
      <VStack py={5}>
        <VStack w="full">
          <Tag size="lg" fontWeight="bold" fontSize="xl" borderRadius="xl">
            <HStack>
              <Text>{heading}</Text>
            </HStack>
          </Tag>
          <Icon as={icon} color="twitter.500" boxSize={100}></Icon>
          <Divider></Divider>
        </VStack>
        {children}
      </VStack>
    </CenterComponent>
  );
};
