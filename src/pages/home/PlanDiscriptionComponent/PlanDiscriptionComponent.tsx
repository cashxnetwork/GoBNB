import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Icon,
  SimpleGrid,
  Tag,
  Text,
  VStack
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsFillCalendar2HeartFill, BsFire } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { Link } from "react-router-dom";
import { PageWrapper } from "../../../components/PageWrapper";
import { CenterComponent, HeadingComponent } from "../../../components/Ui";

const BoxComponent = ({
  icon,
  heading,
  value,
  text
}: {
  icon: IconType;
  heading: string;
  value: number;
  text: string;
}) => {
  return (
    <CenterComponent
      style={{
        flex: 1,
        maxW: 275,
        minH: 400
      }}
    >
      <VStack w="full" spacing={5}>
        <Icon as={icon} boxSize={10}></Icon>
        <Tag colorScheme="blue" fontWeight={900}>
          {heading}
        </Tag>
        <Heading
          color="twitter.500"
          size="3xl"
          fontWeight={900}
          fontFamily="heading"
        >
          {value}%
        </Heading>
        <Text size={["sm", "md"]} textAlign="center">
          {text}
        </Text>
      </VStack>
    </CenterComponent>
  );
};

const features = [
  {
    heading: "Earn Upto",
    icon: MdGroups3,
    text: "Community Spreading Rewards.",
    value: 60
  },
  {
    heading: "Levels",
    icon: FaChartLine,
    text: "Full fees of upgrading value.",
    value: 100
  },
  {
    heading: "Liquidity Pool",
    icon: BsFire,
    text: "4 USD to liquidity of every registration.",
    value: 16
  },
  {
    heading: "Weekly Rewards",
    icon: BsFillCalendar2HeartFill,
    text: "4% of weekly total registration valuen to a random user.",
    value: 4
  }
];

export const PlanDiscriptionComponent = () => {
  return (
    <PageWrapper>
      <HeadingComponent
        heading="A protocol made for"
        gradientHeading="EVERYONE"
      ></HeadingComponent>
      {/* <Wrap
        spacing={5}
        align="center"
        justify="center"
        p={5}
        borderRadius="50px"
      >
        {features.map((featuresBbject, key) => {
          return <BoxComponent {...featuresBbject} key={key}></BoxComponent>;
        })}
      </Wrap> */}
      <SimpleGrid spacing={2} borderRadius="50px" columns={[2, 2, 4]}>
        {features.map((featuresBbject, key) => {
          return <BoxComponent {...featuresBbject} key={key}></BoxComponent>;
        })}
      </SimpleGrid>
      <Box maxW={500} minW={250} w="full" px={10}>
        <Link to="/registration">
          <Button
            w="full"
            rightIcon={<ChevronRightIcon />}
            fontSize="lg"
            h={20}
            borderRadius={20}
            borderBottomWidth="thick"
            colorScheme="yellow"
            bg="yellow.500"
            _hover={{
              bg: "yellow.400"
            }}
          >
            LAUNCH APP
          </Button>
        </Link>
      </Box>
    </PageWrapper>
  );
};
