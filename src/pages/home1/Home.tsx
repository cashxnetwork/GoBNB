import { VStack } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";
import { Stats } from "./Stats";
import { WeeklyReward } from "./WeeklyReward";

export const Home = () => {
    return (
        <VStack w="full" spacing={0}>
            <Header />
            <Stats />
            <WeeklyReward />
        </VStack>
    );
};
