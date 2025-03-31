import { Heading, Text } from "@chakra-ui/react";
import { PageWrapper } from "../../../components/PageWrapper";
import { HeadingComponent } from "../../../components/Ui";
import { projectName } from "../../../constants/projectConfig";

export const AboutUs = () => {
  return (
    <PageWrapper
      style={{
        id: "about-us",
        p: [5, 10]
      }}
    >
      <HeadingComponent
        heading={`Why join ${projectName}?`}
        gradientHeading="NETWORK"
      ></HeadingComponent>
      <Heading size={["sm", "md", "lg"]} maxW="5xl" fontWeight={300}>
        <Text as="span" fontWeight={900}>
          {projectName}
        </Text>{" "}
        the token that’s not just a crypto token, but a life changing crypto
        networking concept built on the latest blockchain technology. This is
        the platform where everyone will receive huge referral bonus directly
        into their wallets by sharing and spreading {projectName} Network.
      </Heading>
      <Heading size={["sm", "md", "lg"]} maxW="5xl" fontWeight={300}>
        {projectName} team has no control over how much you can earn. All the
        transactions are instant and automatic. Early entry into the system is
        very important as more senior level you reach, higher the upgrade income
        you receive.
      </Heading>
      <Heading size={["sm", "md", "lg"]} maxW="5xl" fontWeight={300}>
        Some portion of joining fee goes to {projectName} liquidity which
        increases the value to the token gradually.
      </Heading>
    </PageWrapper>
  );
};
