
import {
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsBox, BsShieldCheck } from 'react-icons/bs';
import { CiLock } from 'react-icons/ci';
import { GiCubes, GiWineGlass } from 'react-icons/gi';
import { PageWrapper } from '../../../components/PageWrapper';
import { CenterComponent, HeadingComponent } from '../../../components/Ui';

const TagComponent = ({
  icon,
  heading,
}: {
  icon: IconType;
  heading: string;
}) => {
  return (
    <CenterComponent
      style={{
        flex: 1
      }}
    >
      <VStack w="full">
        <Icon as={icon} boxSize={10}></Icon>
        <Heading size="sm">{heading}</Heading>
      </VStack>
    </CenterComponent>
  );
};

export const PowerOfBlockchainComponent = () => {
  return (
    <PageWrapper>
      <HeadingComponent
        heading="Build with the power of"
        gradientHeading="BLOCKCHAIN"
      ></HeadingComponent>
      <Icon
        as={GiCubes}
        boxSize={[270, 300]}
        opacity={useColorModeValue(0.75, 1)}
      ></Icon>
      <Container>
        <Text textAlign="center">
          Every logic & reward distribution written on secure smart contracts.
          All smart contracts are verified on block explorers & open source.
        </Text>
      </Container>
      {/* <Wrap spacing={10} align="center" justify="center">
        <TagComponent icon={GiWineGlass} heading="Transparent"></TagComponent>
        <TagComponent icon={BsShieldCheck} heading="Secured"></TagComponent>
        <TagComponent icon={BsBox} heading="Open Source"></TagComponent>
        <TagComponent icon={FaLock} heading="Renounced"></TagComponent>
      </Wrap> */}
      <SimpleGrid spacing={5} columns={[2, 2, 4]}>
        <TagComponent icon={GiWineGlass} heading="Transparent"></TagComponent>
        <TagComponent icon={BsShieldCheck} heading="Secured"></TagComponent>
        <TagComponent icon={BsBox} heading="Open Source"></TagComponent>
        <TagComponent icon={CiLock} heading="Renounced"></TagComponent>
      </SimpleGrid>
    </PageWrapper >
  );
};
