import React from "react";
import {
    useGetAllUsers,
    useGetUserAccount
} from "../../../hooks/ReferralHooks";
import { PageWrapper } from "../../../components/PageWrapper";
import { HeadingComponent } from "../../../components/Ui";
import {
    Badge,
    Heading,
    HStack,
    Skeleton,
    Spacer,
    Tag,
    Text,
    VStack
} from "@chakra-ui/react";
import { shortenAddress } from "../../../utils/web3Functions";

const ShowLatestUserComponent = ({
    userAddress,
    index
}: {
    userAddress: `0x${string}`;
    index: number;
}) => {
    const userAccount = useGetUserAccount(userAddress);
    const timeJoinedInUnix = userAccount?.data?.timestampJoined;
    //convert unix time to minutes or hours or days ago
    const timeJoined = new Date(Number(timeJoinedInUnix) * 1000);
    const now = new Date();
    const diff = now.getTime() - timeJoined.getTime();
    const diffInMinutes = Math.floor(diff / 1000 / 60);
    const diffInHours = Math.floor(diff / 1000 / 60 / 60);
    const diffInDays = Math.floor(diff / 1000 / 60 / 60 / 24);

    // console.log(timeJoinedInUnix, diffInMinutes, diffInHours, diffInDays);
    return (
        <HStack w="full">
            <HStack>
                <Heading size="md">{index + 1}</Heading>
                <Tag p={2} borderRadius={"full"}>
                    <Heading size="sm">{shortenAddress(userAddress, 7)}</Heading>
                </Tag>
            </HStack>
            <Spacer />
            <Text>
                {diffInMinutes > 60
                    ? `${diffInHours} Hours Ago`
                    : diffInHours > 24
                        ? `${diffInDays} Days Ago`
                        : diffInDays > 365
                            ? `${Math.floor(diffInDays / 365)} Years Ago`
                            : `${diffInMinutes}`}{" "}
                Min Ago
            </Text>
        </HStack>
    );
};

export const LatestUserRegistrations = () => {
    const allUsers = useGetAllUsers();
    const totalUsersToShow = 10;
    const users = allUsers?.isSuccess
        ? allUsers?.data?.slice(0, totalUsersToShow)
        : [];
    return (
        allUsers?.data?.length > 0 && (
            <PageWrapper>
                <HeadingComponent
                    heading="Latest User"
                    gradientHeading="REGISTRATIONS"
                ></HeadingComponent>
                <Skeleton
                    isLoaded={allUsers?.data?.length > 0}
                    w="full"
                    maxW={700}
                    as={VStack}
                    borderWidth={"thin"}
                    borderRadius={"3xl"}
                    p={5}
                >
                    {users?.map((user, key) => {
                        return (
                            <ShowLatestUserComponent
                                userAddress={user as `0x${string}`}
                                key={key}
                                index={key}
                            />
                        );
                    })}
                </Skeleton>
            </PageWrapper>
        )
    );
};
