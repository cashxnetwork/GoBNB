"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { useAppKitAccount } from "@reown/appkit/react";
import { parseEther } from "viem";
import {
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract
} from "wagmi";
import { BNBLogoSVG } from "../../assets";
import { CurrentNetworkInfo } from "../../constants/SupportedNetworkInfo";
import { UpgradeStructStructOutput } from "../../web3/contracts/typechain-types/contracts/RegistrationUpgradeable.sol/RegistrationUpgradeable";
import ModalConfirmTransactions from "../Modals/ModalConfirmTransactions";
import ModalTransactionSuccess from "../Modals/ModalTransactionSuccess";
import { CenterComponent } from "../Ui";

function UpgradeUI({
  upgradePlan,
  valueInDecimals,
  currentNetwork
}: {
  upgradePlan?: UpgradeStructStructOutput;
  valueInDecimals: number;
  currentNetwork: CurrentNetworkInfo;
}) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address } = useAppKitAccount();

  const userNativeBalance = useBalance({
    address: address as `0x${string}`
  });

  const {
    writeContractAsync,
    data: dataTransaction,
    reset
  } = useWriteContract();

  const { data, isLoading, status, isSuccess } = useWaitForTransactionReceipt({
    hash: dataTransaction,
    timeout: 60_000 // 1 minute timeout
  });

  const errors = {
    isUserHaveSufficientTokenBalance:
      Number(userNativeBalance?.data?.formatted ?? 0) >= valueInDecimals
        ? true
        : false
  };

  const proceedTransaction = () => {
    if (!errors.isUserHaveSufficientTokenBalance) {
      toast({
        title: "Insufficient Balance.",
        description: "You dont have enough USDT to register.",
        status: "error",
        duration: 5000,
        isClosable: true
      });
    } else {
      onOpen();
    }
  };

  const handleTransaction = async () => {
    try {
      await writeContractAsync({
        address: currentNetwork?.referralContractAddress,
        abi: currentNetwork?.referralContractInterface,
        functionName: "upgradeAccountNative",
        args: [currentNetwork?.priceOracleAddress],
        value: parseEther(`${valueInDecimals}`)
      });
      if (status === "success") {
        toast({
          title: "Transaction Success",
          description: "",
          status: "success",
          duration: 10000,
          isClosable: true
        });
        setTimeout(() => {
          reset();
          onClose();
        }, 20000);
      }
    } catch (err) {
      const error = JSON.stringify(err);
      toast({
        title: JSON.parse(error)?.shortMessage,
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true
      });
    }
  };

  return (
    <VStack spacing={10}>
      <CenterComponent
        style={{
          py: 10,
          w: [300]
        }}
      >
        <VStack minW={250} maxW={300} w="full" spacing={5}>
          <Heading textAlign="center" color="twitter.500">
            Level #{upgradePlan?.id ? Number(upgradePlan?.id) + 1 : 0}
          </Heading>
          <HStack>
            <Heading textAlign="center" color="twitter.500" fontSize="7xl">
              $
              {upgradePlan?.valueToUpgradeInUSD
                ? Number(upgradePlan?.valueToUpgradeInUSD) / 10 ** 18
                : 0}
            </Heading>
          </HStack>
          <Heading size="sm">You have to pay</Heading>
          <Tag py={5} px={10} borderRadius="3xl" colorScheme="yellow">
            <HStack fontStyle="italic">
              <Heading size="md">{valueInDecimals?.toFixed(3)}</Heading>
              <Heading fontWeight={500} size="md">
                BNB
              </Heading>
            </HStack>
          </Tag>
          <Divider></Divider>
          <Tag p={3} borderRadius="3xl" w="full">
            <HStack w="full">
              <Stack>
                <Text>Your Balance</Text>
                <Heading size="md" fontStyle="italic">
                  {Number(userNativeBalance?.data?.formatted)?.toFixed(2)} BNB
                </Heading>
              </Stack>
              <Spacer />
              <Image src={BNBLogoSVG} alt="BNB Logo" boxSize={14}></Image>
            </HStack>
          </Tag>

          <Button
            borderRadius="3xl"
            rightIcon={<ChevronRightIcon />}
            colorScheme="yellow"
            bgColor="yellow.400"
            _hover={{
              bgColor: "yellow.500"
            }}
            onClick={proceedTransaction}
            isDisabled={isLoading}
            w="full"
            h={20}
          >
            Upgrade Now
          </Button>
        </VStack>
      </CenterComponent>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={["xs", "md", "lg"]}
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="25px"
          // bgColor={useColorModeValue('whiteAlpha.900', 'blackAlpha.200')}
          backdropFilter="blur(20px)"
          borderWidth={1}
          borderBottomWidth={5}
        >
          <ModalCloseButton />
          {!isSuccess ? (
            <ModalConfirmTransactions
              onClose={onClose}
              onConfirm={handleTransaction}
              transactionName="Upgrade"
              outCurrencyObject={{
                logo: BNBLogoSVG,
                symbol: "BNB"
              }}
              outCurrencyValue={valueInDecimals}
              buttonProps={{
                isLoading: isLoading,
                isDisabled: isLoading,
                loadingText: "Confirming"
              }}
            ></ModalConfirmTransactions>
          ) : (
            <ModalTransactionSuccess
              onClose={() => {
                onClose();
                reset();
              }}
              transactionHash={`${data?.transactionHash}`}
              currentNetwork={currentNetwork}
            ></ModalTransactionSuccess>
          )}
        </ModalContent>
      </Modal>
    </VStack>
  );
}

export default UpgradeUI;
