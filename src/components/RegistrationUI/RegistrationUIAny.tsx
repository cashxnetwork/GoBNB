"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
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
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { FaUser } from "react-icons/fa";
import { parseEther, zeroAddress } from "viem";
import {
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract
} from "wagmi";
import { BNBLogoSVG } from "../../assets";
import { CurrentNetworkInfo } from "../../constants/SupportedNetworkInfo";
import { useGetUserBusiness, useGetUserTeam } from "../../hooks/ReferralHooks";
import { isAddressValid, shortenAddress } from "../../utils/web3Functions";
import ModalConfirmTransactions from "../Modals/ModalConfirmTransactions";
import ModalTransactionSuccess from "../Modals/ModalTransactionSuccess";
import { CenterComponent } from "../Ui";
import { useState } from "react";
import { BiPaste } from "react-icons/bi";

function RegistrationUIAny({
  userAddress,
  referrerAddress,
  valueInDecimals,
  currentNetwork
}: {
  userAddress: `0x${string}`;
  referrerAddress: `0x${string}` | undefined;
  valueInDecimals: number;
  currentNetwork: CurrentNetworkInfo;
}) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const [selectedUser, setSelectedUser] = useState<`0x${string}`>(
    userAddress as `0x${string}`
  );

  const currentReferrer = referrerAddress ? referrerAddress : zeroAddress;
  const userTeamObject = useGetUserTeam(selectedUser as `0x${string}`);
  const userReferrer = userTeamObject?.data?.[0];
  console.log(userTeamObject);
  const userSelfBusiness = useGetUserBusiness(userReferrer as `0x${string}`)
    ?.data?.[0];

  const handlePasteSelectedUser = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (isAddressValid(text)) {
        setSelectedUser(text as `0x${string}`);
      } else {
        toast({
          title: "Invalid Address",
          description: "Please paste a valid Ethereum address",
          status: "error",
          duration: 3000,
          isClosable: true
        });
      }
    } catch (err: unknown) {
      console.error(err);
      toast({
        title: "Clipboard Access Denied",
        description: "Please allow clipboard access to use paste function",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  };

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

  const errorsArray = [
    {
      condition: !isAddressValid(selectedUser),
      message: "Invalid User Address",
      description:
        "The provided user address is not a valid Ethereum address format"
    },
    {
      condition: userSelfBusiness > BigInt(0),
      message: "User is already active",
      description: "This user has already been registered in the system"
    },
    {
      condition: !referrerAddress,
      message: "Referrer Address is empty",
      description:
        "A referrer address must be provided to complete registration"
    },
    {
      condition: !isAddressValid(referrerAddress as string),
      message: "Invalid Referrer Address",
      description:
        "The provided referrer address is not a valid Ethereum address format"
    },
    {
      condition: userReferrer !== zeroAddress,
      message: "User already have referrer",
      description: "This user is already associated with a referrer account"
    },
    {
      condition:
        Number(userNativeBalance?.data?.formatted ?? 0) < valueInDecimals,
      message: "User dont have sufficient token balance",
      description:
        "Insufficient BNB balance to complete the registration transaction"
    },
    {
      condition: userAddress ? false : true,
      message: "User Address is empty",
      description: "A user address must be provided to complete registration"
    }
  ];

  const proceedTransaction = () => {
    for (const error of errorsArray) {
      if (error.condition) {
        toast({
          title: error.message,
          description: error.description,
          status: "error",
          duration: 5000,
          isClosable: true
        });
        return;
      }
    }
    onOpen();
  };

  const handleTransaction = async () => {
    try {
      await writeContractAsync({
        address: currentNetwork?.referralContractAddress,
        abi: currentNetwork?.referralContractInterface,
        functionName: "registrationAnyNative",
        args: [
          userAddress,
          currentReferrer,
          currentNetwork?.priceOracleAddress
        ],
        value: parseEther(`${valueInDecimals}`),
        chainId: chainId as number
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
            Registration Value
          </Heading>
          <HStack>
            <Heading textAlign="center" color="twitter.500" fontSize="7xl">
              $25
            </Heading>
          </HStack>
          <Heading size="sm">You have to pay</Heading>
          <Tag py={5} px={10} borderRadius="3xl" colorScheme="yellow">
            <HStack fontStyle="italic">
              <Heading size="md">{valueInDecimals?.toFixed(3)}..</Heading>
              <Heading fontWeight={500} size="md">
                BNB
              </Heading>
            </HStack>
          </Tag>
          <VStack>
            <Tag fontWeight={900} colorScheme="yellow">
              Selected User
            </Tag>
            <InputGroup>
              <Input
                value={selectedUser}
                isReadOnly
                borderRadius={"full"}
                variant={"filled"}
              ></Input>
              <InputRightElement>
                <Icon
                  as={BiPaste}
                  cursor={"pointer"}
                  onClick={async () => {
                    handlePasteSelectedUser();
                  }}
                />
              </InputRightElement>
            </InputGroup>
            {/* <Text>{shortenAddress(selectedUser)}</Text> */}
          </VStack>
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

          {userReferrer !== zeroAddress ? (
            <VStack>
              <Heading size="md" color="red">
                Referrer Already set
              </Heading>
              <HStack>
                <Heading size="sm">
                  {shortenAddress(userReferrer as `0x${string}`)}
                </Heading>
                <Icon as={FaUser}></Icon>
              </HStack>
            </VStack>
          ) : (
            referrerAddress && (
              isAddressValid(referrerAddress) ? (
                <VStack>
                  <Heading size="md">Referrer Address</Heading>
                  <HStack>
                    <Heading size="sm">
                      {shortenAddress(referrerAddress as `0x${string}`)}
                    </Heading>
                    <Icon as={FaUser}></Icon>
                  </HStack>
                </VStack>
              ) : (
                <VStack spacing={0}>
                  <Heading size="sm" color="red">
                    Invalid Referrer Address
                  </Heading>
                  <Text fontSize="sm">Default Referrer will be used</Text>
                  <HStack>
                    <Heading size="sm">
                      {shortenAddress(currentReferrer as `0x${string}`)}
                    </Heading>
                    <Icon as={FaUser}></Icon>
                  </HStack>
                </VStack>
              )
            )
          )}

          {errorsArray?.map((error, index) => {
            return (
              error?.condition && (
                <Alert
                  status="error"
                  key={index}
                  as={VStack}
                  borderRadius={"3xl"}
                  spacing={0}
                >
                  <AlertIcon />
                  <AlertTitle>{error?.message}</AlertTitle>
                  <AlertDescription textAlign={"center"} fontSize={"xs"}>
                    {error?.description}
                  </AlertDescription>
                </Alert>
              )
            );
          })}

          <Button
            borderRadius="3xl"
            rightIcon={<ChevronRightIcon />}
            colorScheme="yellow"
            bgColor="yellow.400"
            _hover={{
              bgColor: "yellow.500"
            }}
            onClick={proceedTransaction}
            isDisabled={isOpen}
            isLoading={isLoading}
            w="full"
            h={20}
          >
            Register Now
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
              transactionName="Register"
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

export default RegistrationUIAny;
