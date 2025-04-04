import { Button, useToast } from "@chakra-ui/react";
import { useAppKitNetwork } from "@reown/appkit/react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { polygon } from "viem/chains";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { TransactionProceedButtonProps } from "../constants/types";

export const TransactionProceedButton = ({
  buttonProps,
  buttonLabel,
  writeContractArgs,
  navigateTo
}: TransactionProceedButtonProps) => {
  const [transactionState, setTransactionState] = useState<
    "Pending" | "Awaiting Confirmation" | "Success" | "Error" | undefined
  >(undefined);

  const navigateToPage = useNavigate();
  const toast = useToast();
  const { chainId, switchNetwork } = useAppKitNetwork();

  const {
    writeContractAsync,
    error,
    failureReason,
    isError,
    status,
    reset,
    data: dataTransaction,
    isPending
  } = useWriteContract();

  const {
    data: dataTransactionHash,
    isLoading: isLoadingTransactionHash,
    status: statusTransactionHash,
    isFetching: isFetchingTransactionHash,
    isSuccess: isSuccessTransactionHash,
    isError: isErrorTransactionHash,
    error: errorTransactionHash
  } = useWaitForTransactionReceipt({
    hash: dataTransaction,
    timeout: 60_000 // 1 minute timeout
  });

  const handleTransaction = async () => {
    try {
      if (chainId !== polygon.id) {
        switchNetwork(polygon);
        return;
      }

      if (chainId !== polygon.id) {
        throw new Error("Chain Id is not Polygon");
      }


      setTransactionState("Awaiting Confirmation");
      await writeContractAsync({
        ...writeContractArgs,
        chainId: polygon.id
      });

      // Show confirmation toast
      toast({
        title: "Transaction Submitted",
        description: "Please wait while your transaction is being processed",
        status: "info",
        duration: 5000,
        isClosable: true,
        icon: <AlertTriangle />
      });
    } catch (err) {
      console.error("Transaction error:", err);
      const errorMessage = (err as Error)?.message || "";

      // Handle subscription already active error
      if (errorMessage.includes("Investment: Subscription already active")) {
        toast({
          title: "Subscription Error",
          description:
            "You already have an active subscription. You can only activate subscription for someone else.",
          status: "warning",
          duration: 5000,
          isClosable: true,
          icon: <AlertTriangle />
        });
        setTransactionState("Error");
        return;
      }

      // Handle user rejection
      if (errorMessage.includes("User rejected")) {
        toast({
          title: "Transaction Cancelled",
          description: "You rejected the transaction",
          status: "warning",
          duration: 5000,
          isClosable: true,
          icon: <AlertTriangle />
        });
        setTransactionState(undefined);
        return;
      }

      // Handle gas estimation errors
      if (errorMessage.includes("gas")) {
        toast({
          title: "Gas Estimation Failed",
          description: "Please check your wallet balance or try again later",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <AlertTriangle />
        });
        setTransactionState("Error");
        return;
      }

      // Handle contract-specific errors
      if (errorMessage.includes("transfer amount exceeds allowance")) {
        toast({
          title: "Allowance Error",
          description:
            "Please approve the token spending first by clicking the Approve button.",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />,
          containerStyle: {
            width: "95%",
            maxWidth: "400px"
          }
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Invalid investment plan")) {
        toast({
          title: "Investment Plan Error",
          description:
            "The selected investment plan is invalid. Please select a valid plan.",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Value less than min contribution")) {
        toast({
          title: "Investment Error",
          description:
            "The investment amount is below the minimum required contribution",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Investment amount must be greater than 0")) {
        toast({
          title: "Investment Error",
          description: "Please enter an investment amount greater than 0",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Token address cannot be zero")) {
        toast({
          title: "Token Error",
          description: "Invalid token address. Please select a valid token",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Invalid user address")) {
        toast({
          title: "User Error",
          description:
            "Invalid user address. Please check the address and try again",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Only admin can call this function")) {
        toast({
          title: "Access Denied",
          description: "This action requires admin privileges",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Referrer and user cannot be same")) {
        toast({
          title: "Referral Error",
          description: "You cannot be your own referrer",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Referee cannot be referrer upline")) {
        toast({
          title: "Referral Error",
          description:
            "Invalid referral structure. Please check the referral hierarchy",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Array length mismatch")) {
        toast({
          title: "Data Error",
          description: "Invalid data format. Please check your input data",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      if (errorMessage.includes("Invalid investment type")) {
        toast({
          title: "Investment Error",
          description: "Please select a valid investment type",
          status: "error",
          duration: 5000,
          isClosable: true,
          icon: <BiErrorCircle />
        });
        setTransactionState("Error");
        return;
      }

      // Default error handler for unhandled errors
      toast({
        title: "Transaction Error",
        description: errorMessage || "An unexpected error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        icon: <BiErrorCircle />
      });
      setTransactionState("Error");
    }
  };

  useEffect(() => {
    if (isPending) {
      setTransactionState("Awaiting Confirmation");
    } else if (isFetchingTransactionHash) {
      setTransactionState("Pending");
    } else if (errorTransactionHash) {
      toast({
        title: "Transaction Error",
        description: "Transaction is unsuccessful.",
        status: "error",
        icon: <BiErrorCircle />,
        isClosable: true,
        duration: 5000
      });
    } else if (isErrorTransactionHash) {
      toast({
        title: "Transaction Error",
        description: "Transaction is unsuccessful.",
        status: "error",
        icon: <BiErrorCircle />,
        isClosable: true,
        duration: 5000
      });
    } else if (isSuccessTransactionHash) {
      toast({
        title: "Transaction Success",
        description: "Transaction is successful.",
        status: "success",
        icon: <CheckCircle />,
        isClosable: true,
        duration: 5000
      });

      reset();

      setTransactionState(undefined);

      if (navigateTo && writeContractArgs.functionName === "invest") {
        if (
          statusTransactionHash === "success" &&
          dataTransactionHash?.transactionHash === dataTransaction
        ) {
          navigateToPage(navigateTo);
        }
      }
    } else {
      setTransactionState(undefined);
    }
  }, [
    reset,
    status,
    dataTransaction,
    dataTransactionHash,
    error,
    failureReason,
    isError,
    isPending,
    isLoadingTransactionHash,
    isFetchingTransactionHash,
    isSuccessTransactionHash,
    statusTransactionHash,
    navigateTo,
    navigateToPage,
    errorTransactionHash,
    isErrorTransactionHash,
    writeContractArgs.functionName,
    toast
  ]);

  return (
    <>
      <Button
        {...buttonProps}
        onClick={handleTransaction}
        isLoading={
          isPending || isLoadingTransactionHash || isFetchingTransactionHash
        }
        loadingText={transactionState || "Processing..."}
        isDisabled={
          isPending || isLoadingTransactionHash || isFetchingTransactionHash
        }
        w="full"
        minH={14}
        borderRadius={"3xl"}
      >
        {buttonLabel || "Proceed Transaction"}
      </Button>
    </>
  );
};
