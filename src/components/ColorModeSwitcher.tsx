import {
  Center,
  HStack,
  Icon,
  IconProps,
  useColorMode,
  useColorModeValue,
  StackProps
} from "@chakra-ui/react";
import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { forwardRef, Ref } from "react";

type ColorModeSwitcherProps = Omit<IconProps, "aria-label">;

// const MotionHStack = motion(HStack);
const MotionHStack = motion(
  forwardRef<SVGSVGElement, StackProps>((props, ref: Ref<SVGSVGElement>) => {
    return <HStack ref={ref} {...props}></HStack>;
  })
);

const MotionCenter = motion(
  forwardRef<SVGSVGElement, StackProps>((props, ref: Ref<SVGSVGElement>) => {
    return <Center ref={ref} {...props}></Center>;
  })
);

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [isOn, setIsOn] = React.useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleColorMode();
  };

  return (
    <MotionHStack
      minW={14}
      p={2}
      borderRadius="full"
      onClick={toggleSwitch}
      justify={isOn ? "flex-end" : "flex-start"}
      cursor="pointer"
      layout
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      backgroundColor={"black"}
      borderWidth={"thin"}
    >
      <MotionCenter
        boxSize={[5, 7]}
        borderRadius="full"
        layout
        transition={{ type: "spring" }}
        color="white"
      >
        <Icon as={SwitchIcon} />
      </MotionCenter>
    </MotionHStack>
  );
};
