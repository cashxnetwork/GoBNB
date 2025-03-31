import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Counter } from "../../components/Counter";
import Lottie from "lottie-react";
import LottieUSDTMain from "../../assets/lottie/usdt.json";

export const WeeklyReward = () => {
    return (
        <VStack w="full" pos={"relative"}>
            <Box
                bgGradient={"linear(to-r, transparent, teal.500, transparent)"}
                filter={"blur(200px)"}
                w="full"
                h={200}
                pos={"absolute"}
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
            ></Box>
            <Stack w="full" maxW={"8xl"} py={20} px={5} gap={10}>
                <Flex direction={"column"} gap={5}>
                    <Heading fontSize={["3xl", "4xl", "5xl"]}>
                        Weekly Reward to be Distributed
                    </Heading>
                    <Counter timeinseconds={1744014400} size="xl" />
                </Flex>
                <Stack direction={["column", "column", "row"]} align={"center"}>
                    <Heading fontSize={["3xl", "4xl", "5xl"]}>
                        Our All Rewards are in universal accepted{" "}
                        <Text as="span" color="teal.400" fontWeight={900}>
                            USDT
                        </Text>
                    </Heading>
                    <Box pos={"relative"}>
                        <Lottie
                            animationData={LottieUSDTMain}
                            style={{ width: "100%" }}
                        ></Lottie>
                    </Box>
                </Stack>
            </Stack>
        </VStack>
    );
};
