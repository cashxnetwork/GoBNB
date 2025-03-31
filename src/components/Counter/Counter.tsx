import { HStack, Text, VStack } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

export const Counter = ({
  timeinseconds,
  size = "md"
}: {
  timeinseconds: number | undefined;
  size?: "sm" | "md" | "lg" | "xl" | string;
}) => {
  const buttonBgColor = "twitter.400";
  const counterSize =
    size === "sm"
      ? "50px"
      : size === "md"
        ? "60px"
        : size === "lg"
          ? "70px"
          : size === "xl"
            ? "80px"
            : size;

  const now = new Date().getTime();
  const nowSeconds = Math.round(now / 1000);
  const [SecondsCounter, setSecondsCounter] = useState(0);
  const [MinutesCounter, setMinutesCounter] = useState(0);
  const [HoursCounter, setHoursCounter] = useState(0);
  const [DaysCounter, setDaysCounter] = useState(0);

  const day = 24 * 60 * 60;
  const hour = 60 * 60;
  const minutes = 60;
  // const seconds = 1000;

  const [endTime, setEndTime] = useState(timeinseconds ?? nowSeconds);

  useEffect(() => {
    if (timeinseconds) {
      setEndTime(timeinseconds);
    }
  }, [timeinseconds, endTime]);

  const remaingStakingSeconds = useCallback(() => {
    const remainingStakingSeconds = endTime - nowSeconds;
    const RemainingDays = Math.floor(remainingStakingSeconds / day);
    const RemainingHours = Math.floor((remainingStakingSeconds % day) / hour);
    const RemainingMinutes = Math.floor(
      (remainingStakingSeconds % hour) / minutes
    );
    const RemainingSeconds = Math.floor(remainingStakingSeconds % minutes);

    setSecondsCounter(RemainingSeconds < 0 ? 0 : RemainingSeconds);
    setMinutesCounter(RemainingMinutes >= 0 ? RemainingMinutes : 0);
    setHoursCounter(RemainingHours >= 0 ? RemainingHours : 0);
    setDaysCounter(RemainingDays >= 0 ? RemainingDays : 0);
  }, [endTime, nowSeconds, day, hour, minutes]);

  useEffect(() => {
    const clear = setTimeout(() => {
      remaingStakingSeconds();
    }, 1000);

    return () => {
      clearInterval(clear);
    };
  }, [SecondsCounter, timeinseconds, endTime, remaingStakingSeconds]);

  const CounterWraper = ({
    time,
    timeString
  }: {
    time: number;
    timeString: string;
  }) => {
    return (
      <VStack>
        <VStack
          boxSize={counterSize}
          fontSize={size}
          fontWeight="bold"
          justify="center"
          bgColor={buttonBgColor}
          borderRadius={"25%"}
          borderWidth={"thin"}
          borderColor={"yellow.500"}
        >
          <Text>{time}</Text>
        </VStack>
        <Text opacity="0.7" fontSize={size}>
          {timeString}
        </Text>
      </VStack>
    );
  };

  return (
    <HStack>
      <CounterWraper time={DaysCounter} timeString="Days"></CounterWraper>
      <CounterWraper time={HoursCounter} timeString="Hours"></CounterWraper>
      <CounterWraper time={MinutesCounter} timeString="Minutes"></CounterWraper>
      <CounterWraper time={SecondsCounter} timeString="Seconds"></CounterWraper>
    </HStack>
  );
};
