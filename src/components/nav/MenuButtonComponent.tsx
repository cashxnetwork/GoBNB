import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";
import { useAccount } from "wagmi";
import { NavMenuDrawer } from "./Modals/NavMenuDrawer";

export default function MenuButtonComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address } = useAccount();
  return (
    <>
      <IconButton
        aria-label="Menu Button"
        icon={
          <MenuIcon
            strokeWidth={5}
            size={"25px"}
            cursor={"pointer"}
            color="white"
          />
        }
        size="md"
        onClick={onOpen}
        rounded="full"
        borderWidth={"thin"}
        bgColor={"black"}
        _hover={{
          bgColor: "gray.900"
        }}
      />
      <Drawer
        isOpen={isOpen}
        placement={useBreakpointValue(["bottom", "bottom", "right"])}
        onClose={onClose}
        preserveScrollBarGap={true}
      >
        <DrawerOverlay />
        <DrawerContent
          borderTopRightRadius={["3xl", 0]}
          borderTopLeftRadius={["3xl"]}
          borderBottomLeftRadius={[0, 0, "3xl"]}
          bgColor={useColorModeValue("white", "gray.900")}
          boxShadow="lg"
        >
          <NavMenuDrawer address={address} onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
}
