import {
    Box,
    Heading,
    Icon,
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react";
import { FaChartArea, FaTrophy } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IconType } from "react-icons/lib";
import { SiBnbchain } from "react-icons/si";

type StatsObject = {
    icon?: IconType;
    lable: string;
    value: string;
};

const statsObjectArray = [
    {
        icon: HiMiniUserGroup,
        lable: "Total Users",
        value: "1000"
    },
    {
        icon: SiBnbchain,
        lable: "Total Registration Value",
        value: "100"
    },
    {
        icon: FaTrophy,
        lable: "Referral Reward Distributed",
        value: "1000"
    },
    {
        icon: FaChartArea,
        lable: "Weekly Reward Distributed",
        value: "1000"
    }
];

const StatsComponent = ({ statsObject }: { statsObject: StatsObject }) => {
    return (
        <VStack textAlign={"center"} maxW={"15ch"} w="full" p={3}>
            <Icon as={statsObject?.icon} boxSize={14}></Icon>
            <Heading color="yellow.500">{statsObject?.value}</Heading>
            <Text fontSize={"sm"} opacity={0.7}>
                {statsObject?.lable}
            </Text>
        </VStack>
    );
};

export const Stats = () => {
    return (
        <VStack w="full" px={5} pos={"relative"} overflow={"visible"}>
            <Box
                position="absolute"
                bgGradient={"linear(to-r, transparent, yellow, transparent)"}
                width={"80%"}
                h={100}
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                filter="blur(200px)"
            ></Box>
            <SimpleGrid
                columns={[2, 4]}
                w="full"
                maxW={"8xl"}
                p={5}
                gap={5}
                justifyItems={"center"}
                zIndex={1}
            >
                {statsObjectArray.map((statsObject, index) => (
                    <StatsComponent key={index} statsObject={statsObject} />
                ))}
            </SimpleGrid>
        </VStack>
    );
};
