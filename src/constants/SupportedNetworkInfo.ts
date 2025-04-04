import { Abi } from "viem";
import { Chain, bsc } from "wagmi/chains";
import { PriceOracleObject, ReferralV1ContractObject } from "./ContractAddress";

export const projectName = "MarsNext";
export const tagLine =
  "A reward centric decentralized protocol only made for community.";
export const AddressZero: `0x${string}` =
  "0x0000000000000000000000000000000000000000";
export const AddressDead: `0x${string}` =
  "0x000000000000000000000000000000000000dEaD";

export const supportedCurrencyIcons = [
  "/token-icons/usdt.svg",
  "/token-icons/busd.svg"
];

export interface SupportedTokenInterface {
  contractAddress: `0x${string}`;
  contractABI: Abi; // Replace `any` with the actual ABI type
  name: string;
  symbol: string;
  decimals: number;
  logo: string; // Assuming `USDTLogoSVG` and `BUSDLogoSVG` are strings representing the SVGs
}

export interface CurrentNetworkInfo {
  referralContractAddress: `0x${string}`;
  referralContractInterface: Abi;
  priceOracleAddress?: `0x${string}`;
  priceOracleInterface?: Abi;
  native: Chain;
  logo: string;
}

export interface SupportedNetworkInfo {
  [key: number]: CurrentNetworkInfo;
}

export const supportedNetworkInfo: SupportedNetworkInfo = {
  [bsc.id]: {
    referralContractAddress: ReferralV1ContractObject.bscAddress,
    referralContractInterface: ReferralV1ContractObject.abi,
    priceOracleAddress: PriceOracleObject.bscAddress,
    priceOracleInterface: PriceOracleObject.abi,
    native: bsc,
    logo: "/chainIcons/bscSmartChainLogo.svg"
  }
};
