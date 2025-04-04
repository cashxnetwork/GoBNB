import { CheckIcon, CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Link, useClipboard } from "@chakra-ui/react";
import { useAppKitNetwork } from "@reown/appkit/react";

export const AddressActionButtons = ({ address }: { address: string }) => {
  const { onCopy, hasCopied } = useClipboard(address);
  const { caipNetwork } = useAppKitNetwork();

  console.log("caipNetwork", caipNetwork)

  return (
    <HStack>
      <IconButton
        aria-label="Address copy button"
        icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
        onClick={onCopy}
        size="sm"
        borderRadius="xl"
      ></IconButton>
      <Link
        // href={`${chain?.blockExplorers?.default.url}/address/${address}`}
        target="_blank"
      >
        <IconButton
          aria-label="Open in explorer button"
          icon={<ExternalLinkIcon />}
          size="sm"
          borderRadius="xl"
        ></IconButton>
      </Link>
    </HStack>
  );
};
