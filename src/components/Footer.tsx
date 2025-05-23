import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  VStack,
  Wrap,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import SocialMediaIcons from "./SocialMediaIcons";
import { projectName } from "../constants/projectConfig";

export default function Footer() {
  return (
    <VStack
      w="full"
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      align={useBreakpointValue({
        base: "center",
        sm: "center",
        md: "center",
        lg: "flex-end",
        fallback: "lg"
      })}
      p={5}
      borderTopRadius="3xl"
    >
      <Wrap
        w="full"
        py={5}
        justify={["center", "center", "center", "space-between"]}
        spacing={10}
      >
        <VStack spacing={5}>
          <Box maxW={200}>
            <Logo />
          </Box>
          <Text textAlign="center">
            © 2025 {projectName}Network. All rights reserved
          </Text>
        </VStack>
        <VStack spacing={5}>
          <Text textAlign="center">White Paper & Docs</Text>
          <Button
            borderRadius="xl"
            rightIcon={<ExternalLinkIcon />}
            as="a"
            href="https://docs.gobnb.network"
            target="_blank"
          >
            Read Documentation
          </Button>
        </VStack>
        <VStack spacing={5}>
          <Text textAlign="center">Follow us on Social Media</Text>
          <SocialMediaIcons />
        </VStack>
        {/* <VStack spacing={5}>
          <Heading size="md" color="orange.500" textAlign="center">
            Contract Address
          </Heading>
          <Flex direction="column" gap={2}>
            <Button
              as="a"
              borderRadius="xl"
              rightIcon={<ExternalLinkIcon />}
              href={`${polygon.blockExplorers.default.url}/address/${supportedNetworkInfo[137].referralContractAddress}`}
              target="_blank"
            >
              Referral Contract
            </Button>
            <Button borderRadius="xl" rightIcon={<ExternalLinkIcon />}>
              Variables Contract
            </Button>
            <Button borderRadius="xl" rightIcon={<ExternalLinkIcon />}>
              Core Members Contract
            </Button>
          </Flex>
        </VStack> */}

        {/* <VStack spacing={5}>
          <Text textAlign="center">Audit Reports</Text>
          <HStack>
            <Link href="/auditReports/coinToolAuditReport.pdf" target="_blank">
              <Image
                src={'/auditReports/coinToolLogo.png'}
                boxSize={10}
                alt="Coin Tool Logo"
              ></Image>
            </Link>
          </HStack>
        </VStack> */}
      </Wrap>
    </VStack>
  );
}
