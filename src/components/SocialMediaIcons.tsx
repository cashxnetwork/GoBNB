import {
  Icon,
  IconButton,
  IconButtonProps,
  VisuallyHidden,
  Wrap,
  useColorModeValue
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaBlog, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const iconsObject = [
  {
    label: "X",
    icon: FaSquareXTwitter,
    href: "https://x.com/goBNBgo"
  },
  {
    label: "Telegram",
    icon: FaTelegram,
    href: "https://t.me/goBNBgo"
  },
  {
    label: "Blog",
    icon: FaBlog,
    href: "https://blog.gobnb.network"
  },
  {
    label: "Email",
    icon: MdAttachEmail,
    href: "mailTo:contact@gobnb.network"
  }
];

const SocialMediaIconsButton = ({
  icon,
  label,
  href,
  style
}: {
  icon: ReactElement | undefined;
  label: string;
  href: string;
  style?: IconButtonProps;
}) => {
  return (
    <IconButton
      aria-label="Social Media Icons Button"
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
      icon={icon}
      {...style}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
    </IconButton>
  );
};

export const SocialMediaIcons = ({ style }: { style?: IconButtonProps }) => {
  return (
    <Wrap spacing={3} align="center" justify="center">
      {iconsObject?.map((iconsObject, key) => {
        return (
          <SocialMediaIconsButton
            key={key}
            label={iconsObject?.label}
            icon={<Icon as={iconsObject?.icon}></Icon>}
            href={iconsObject?.href}
            style={style}
          ></SocialMediaIconsButton>
        );
      })}
    </Wrap>
  );
};

export default SocialMediaIcons;
