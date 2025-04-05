import { CheckIcon, CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  HStack,
  IconButton,
  Link,
  useClipboard,
  useToast
} from "@chakra-ui/react";
import { useAppKitNetwork } from "@reown/appkit/react";
import { useConfig } from "wagmi";

export const AddressActionButtons = ({ address }: { address: string }) => {
  const { onCopy, hasCopied } = useClipboard(address);
  const { caipNetwork } = useAppKitNetwork();
  const config = useConfig();

  const toast = useToast();

  console.log("config", config);

  return (
    <HStack>
      <IconButton
        aria-label="Address copy button"
        icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
        onClick={() => {
          onCopy();
          toast({
            title: "Copied Succesfully",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top-right",
            colorScheme: "yellow"
          });
        }}
        size="sm"
        borderRadius="xl"
        variant={"ghost"}
      ></IconButton>
      {/* <Link
        // href={`${chain?.blockExplorers?.default.url}/address/${address}`}
        target="_blank"
      >
        <IconButton
          aria-label="Open in explorer button"
          icon={<ExternalLinkIcon />}
          size="sm"
          borderRadius="xl"
        ></IconButton>
      </Link> */}
    </HStack>
  );
};
