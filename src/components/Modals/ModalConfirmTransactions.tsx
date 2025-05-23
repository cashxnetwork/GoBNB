import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonProps,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spacer,
  VStack
} from "@chakra-ui/react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function ModalConfirmTransactions({
  onClose,
  onConfirm,
  transactionName,
  outCurrencyObject,
  outCurrencyValue,
  buttonProps
}: {
  onClose: () => void;
  onConfirm: () => void;
  transactionName: string;
  outCurrencyObject?: {
    logo: string;
    symbol: string;
  };
  outCurrencyValue?: number;
  buttonProps?: ButtonProps;
}) {
  return (
    <>
      <ModalHeader>Confirm Transaction</ModalHeader>
      <Divider />
      <ModalBody>
        <VStack w="full" spacing={5}>
          <Heading size="md">You are going to {transactionName}</Heading>
          <HStack w="full">
            <Image
              src={outCurrencyObject?.logo}
              boxSize={7}
              alt="Out currency logo"
            ></Image>
            <Heading size="md">{outCurrencyObject?.symbol}</Heading>
            <Spacer />
            <Heading size="md">{outCurrencyValue?.toFixed(5)}...</Heading>
            <Icon as={BsArrowUpRightCircleFill} color="red"></Icon>
          </HStack>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <HStack>
          <Button
            borderRadius="xl"
            variant="outline"
            colorScheme="red"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            rightIcon={<ChevronRightIcon />}
            borderRadius="xl"
            colorScheme="green"
            onClick={onConfirm}
            {...buttonProps}
          >
            Confirm
          </Button>
        </HStack>
      </ModalFooter>
    </>
  );
}

export default ModalConfirmTransactions;
