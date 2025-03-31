'use client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { projectName } from '../../../constants/projectConfig';

export const HeaderHeadingComponent = () => {
  const secondaryHeading =
    `A fully #decentralised protocol that distributes rewards for joining the ${projectName} network`;
  return (
    <VStack spacing={5} maxW="3xl">
      <VStack
        spacing={0}
        fontSize={['5xl', '6xl', '7xl']}
        fontWeight={800}
        fontFamily="heading"
        lineHeight={1}
        textAlign={"center"}
      >
        {/* <Text textAlign="center">{mainHeading}</Text> */}
        <Text>POWERFUL CRYPTO</Text>
        <Text>REWARD NETWORK</Text>
      </VStack>
      <Heading
        size="lg"
        textAlign="center"
        px={5}
        lineHeight={1.2}
        maxW="2xl"
        fontWeight={300}
      >
        {secondaryHeading}
      </Heading>
      <Link to="/registration">
        <button></button>
        <Button
          w={[250, 300, 400]}
          h={16}
          borderRadius={20}
          rightIcon={<ChevronRightIcon />}
          zIndex={1}
          borderBottomWidth="thick"
          variant="solid"
          colorScheme='yellow'
          bg="yellow.500"
          _hover={{
            bg: "yellow.400",
          }}
        >
          ENTER THE APP
        </Button>
      </Link>
    </VStack>
  );
};
