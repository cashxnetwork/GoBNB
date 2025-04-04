import { ButtonProps } from "@chakra-ui/react";
import { BlockchainApiTokenPriceResponse } from "@reown/appkit";
import { Abi } from "viem";

export type WriteContractArgsType = {
  address: `0x${string}`;
  abi: Abi;
  functionName: string;
  args: unknown[];
  value?: bigint;
};

export type BlockchainApiTokenPriceResponseExtended =
  BlockchainApiTokenPriceResponse & {
    fungibles: {
      iconUrl: string;
      price: number;
      address: `0x${string}`;
      name: string;
      symbol: string;
      decimals: number;
    }[];
  };

export type TransactionProceedButtonProps = {
  buttonProps?: ButtonProps;
  buttonLabel?: string;
  writeContractArgs: WriteContractArgsType;
  navigateTo?: string;
};
