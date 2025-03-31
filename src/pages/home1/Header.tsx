import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    Stack,
    Tag,
    VStack
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import LottieBNBLogo from "../../assets/lottie/bnb.json";
import LottieBNB2Logo from "../../assets/lottie/bnb2.json";
import LottieBox from "../../assets/lottie/box.json";
import { LucideMoveRight } from "lucide-react";

const headingMain = "Earn crypto with the power of BSC Ecosystem";

export const Header = () => {
    return (
        <VStack w="full" spacing={0}>
            <Stack
                w="full"
                maxW="8xl"
                direction={["column", "column", "row"]}
                p={5}
                alignItems={"center"}
                justifyContent={"space-between"}
                py={20}
            >
                <Flex direction={"column"} gap={5}>
                    <Tag
                        maxW={"fit-content"}
                        colorScheme="orange"
                        pr={5}
                        borderRadius={"full"}
                    >
                        <HStack spacing={0}>
                            <Box boxSize={16}>
                                <Lottie animationData={LottieBNB2Logo}></Lottie>
                            </Box>
                            <Heading size={["sm", "md"]}>Built on BSC, for BSC</Heading>
                        </HStack>
                    </Tag>
                    <Heading fontSize={["4xl", "5xl", "6xl", "7xl"]} fontWeight={900}>
                        {headingMain}
                    </Heading>
                    <Button w={[300]} h={20} borderRadius={"3xl"}>
                        <HStack gap={10}>
                            <Lottie
                                animationData={LottieBox}
                                style={{ width: "30px", color: "white", stroke: "white" }}
                            ></Lottie>
                            <Heading size="sm">Explore DApp</Heading>
                            <Icon as={LucideMoveRight} strokeWidth={5}></Icon>
                        </HStack>
                    </Button>
                </Flex>
                <Lottie
                    animationData={LottieBNBLogo}
                    style={{
                        width: "100%"
                    }}
                ></Lottie>
            </Stack>
        </VStack>
    );
};
