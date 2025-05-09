import { Abi, erc20Abi } from "viem";
import { RegistrationUpgradeableABI } from "../web3/contractDeploymentDetails/RegistrationUpgradeable/RegistrationUpgradeableABI";
import { PriceOracleABI } from "../web3/contractDeploymentDetails/PriceOracle/PriceOracleABI";
// import ReferralV1ContractInterface from "../contracts/artifacts/contracts/CashXProtocolReferral.sol/CashXProtocolReferral.json";

export const AddressZero: `0x${string}` =
  "0x0000000000000000000000000000000000000000";
export const AddressDead: `0x${string}` =
  "0x000000000000000000000000000000000000dEaD";

export type ContractObject = {
  abi: Abi;
  polygonAddress: `0x${string}`;
  bscAddress: `0x${string}`;
};

export type TokenContractObject = {
  abi: Abi;
  polygonAddress: `0x${string}`;
  bscAddress: `0x${string}`;
};

export const ReferralV1ContractObject: ContractObject = {
  abi: RegistrationUpgradeableABI,
  polygonAddress: AddressZero,
  bscAddress: "0xcb31dB819d9ad85A46463bbA161D85532b8Ad6e7"
};

export const PriceOracleObject: ContractObject = {
  abi: PriceOracleABI,
  polygonAddress: AddressZero,
  bscAddress: "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"
};

export const USDT: TokenContractObject = {
  abi: erc20Abi,
  polygonAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  bscAddress: "0x55d398326f99059fF775485246999027B3197955"
};

export const BUSD: TokenContractObject = {
  abi: erc20Abi,
  polygonAddress: "0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39",
  bscAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
};
