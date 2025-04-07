import {
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  FcClock,
  FcConferenceCall,
  FcExternal,
  FcFeedIn
} from "react-icons/fc";
import { PageWrapper } from "../../../components/PageWrapper";
import { CenterComponent } from "../../../components/Ui";

export const Features = () => {
  const featuresArray = [
    {
      heading: "Community Spreading Rewards",
      subHeading: "All reward straight in your wallet.",
      icon: FcConferenceCall
    },
    {
      heading: "Upgrade Rewards",
      subHeading:
        "You receive full amount of upgrade fees when your friend upgrades.",
      icon: FcExternal
    },
    {
      heading: "Liquidity Generation",
      subHeading: "4 USD of every registration goes to liquidity.",
      icon: FcFeedIn
    },
    {
      heading: "Weekly Rewards",
      subHeading:
        "A random user is selected every week to give some percentage of total registration value of 7 days.",
      icon: FcClock
    }
  ];
  return (
    <PageWrapper>
      <SimpleGrid columns={[2, 2, 4]} spacing={2}>
        {featuresArray.map((valuesObject, key) => {
          return (
            <CenterComponent
              key={key}
              style={{
                flex: 1,
                maxW: 275,
                minH: 400,
                alignItems: "flex-start"
              }}
            >
              <VStack>
                <Icon as={valuesObject?.icon} boxSize={20}></Icon>
                <Heading
                  size="lg"
                  textAlign="center"
                  color="twitter.500"
                  fontWeight={500}
                >
                  {valuesObject?.heading}
                </Heading>
                <Text textAlign="center" fontSize={["sm", "md"]}>{valuesObject?.subHeading}</Text>
              </VStack>
            </CenterComponent>
          );
        })}
      </SimpleGrid>
    </PageWrapper>
  );
};
