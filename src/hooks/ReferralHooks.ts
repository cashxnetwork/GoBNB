import { zeroAddress } from "viem";
import { useReadContract } from "wagmi";
import { bsc } from "wagmi/chains";
import { supportedNetworkInfo } from "../constants/SupportedNetworkInfo";
import { RegistrationUpgradeableABI } from "../web3/contractDeploymentDetails/RegistrationUpgradeable/RegistrationUpgradeableABI";
import { RegistrationUpgradeable } from "../web3/contracts/typechain-types/contracts/RegistrationUpgradeable.sol/RegistrationUpgradeable";

// Extract read-only function names from ABI
type ReadOnlyFunctions = Extract<
  (typeof RegistrationUpgradeableABI)[number],
  { type: "function"; stateMutability: "view" }
>;

// Type for read-only function names
type ReadOnlyFunctionNames = ReadOnlyFunctions["name"] & string;

export const useGetReadContract = (
  functionName: ReadOnlyFunctionNames,
  args?: readonly [] | readonly [`0x${string}`] | readonly [number]
) => {
  const currentNetwork = supportedNetworkInfo[bsc.id];

  return useReadContract({
    address: currentNetwork?.referralContractAddress,
    abi: RegistrationUpgradeableABI,
    functionName,
    args: args ?? [],
    blockTag: "latest",
    chainId: bsc.id
  });
};

export type UpgradePlanInfoValueType = {
  id: number;
  valueToUpgradeInUSD: bigint;
};

export const useUpgradePlans = () => {
  const value = useGetReadContract("getUpgradePlans");
  return {
    ...value,
    data: value.data as unknown as Awaited<
      ReturnType<RegistrationUpgradeable["getUpgradePlans"]>
    >
  };
};

export const useGetUpgradePlanById = (id: number) => {
  return useGetReadContract("getUpgradePlansById", [id]);
};

export const useGetUserLevelToUpgrade = (
  userAddress: `0x${string}` | undefined
) => {
  const value = useGetReadContract("getUserCurrentUpgradeLevel", [
    userAddress ?? zeroAddress
  ]);

  return {
    ...value,
    data: value.data as unknown as Awaited<
      ReturnType<RegistrationUpgradeable["getUserCurrentUpgradeLevel"]>
    >
  };
};

export const useNeedNativeToRegister = (priceOracleAddress: `0x${string}`) => {
  const value = useGetReadContract("needNativeToRegister", [
    priceOracleAddress
  ]);

  return {
    ...value,
    data: value.data as unknown as Awaited<
      ReturnType<RegistrationUpgradeable["needNativeToRegister"]>
    >
  };
};

export const useNativePrice = (
  priceOracleAddress: `0x${string}` | undefined
) => {
  const value = useGetReadContract("getNativePriceInUSD", [
    priceOracleAddress ?? zeroAddress
  ]);
  return {
    ...value,
    data: value.data as unknown as Awaited<
      ReturnType<RegistrationUpgradeable["getNativePriceInUSD"]>
    >
  };
};

export const useGetUserBusiness = (userAddress: `0x${string}` | undefined) => {
  const value = useGetReadContract("getUserBusiness", [
    userAddress ?? zeroAddress
  ]);
  return {
    ...value,
    data: value.data as unknown as Awaited<
      ReturnType<RegistrationUpgradeable["getUserBusiness"]>
    >
  };
};

export const useGetUserRewards = (userAddress: `0x${string}` | undefined) => {
  const value = useGetReadContract("getUserRewards", [
    userAddress ?? zeroAddress
  ]);
  return {
    ...value,
    data: value.data as unknown as Awaited<
      ReturnType<RegistrationUpgradeable["getUserRewards"]>
    >
  };
};

export type TypeTeamValueObject = {
  referrer: `0x${string}`;
  referees: `0x${string}`[];
  refereeCount: number;
  refereeAssigned: `0x${string}`[] | [];
  refereeAssignedCount: number;
  team: TypeTeamStruct[];
  teamCount: number;
};

export type TypeTeamStruct = {
  teamMember: `0x${string}`;
  level: number;
};

export const useGetUserTeam = (userAddress: `0x${string}` | undefined) => {
  const value = useGetReadContract("getUserTeam", [userAddress ?? zeroAddress]);
  return {
    ...value,
    data: value.data as Awaited<
      ReturnType<RegistrationUpgradeable["getUserTeam"]>
    >
  };
};

export const useGetWeeklyRewardToBeDistributed = () => {
  const value = useGetReadContract("getWeeklyRewardToBeDistributed");
  return {
    ...value,
    data: value.data as Awaited<
      ReturnType<RegistrationUpgradeable["getWeeklyRewardToBeDistributed"]>
    >
  };
};

export const useGetRegistrationsStats = () => {
  const value = useGetReadContract("getRegistrationsStats");
  return {
    ...value,
    data: value.data as unknown as Awaited<
      ReturnType<RegistrationUpgradeable["getRegistrationsStats"]>
    >
  };
};

// export const useGetUserLimits = (userAddress: `0x${string}` | undefined) => {
//   const value = useGetReadContract("getUserLimits", [
//     userAddress ?? zeroAddress
//   ]);
//   return {
//     ...value,
//     data: value.data as unknown as Awaited<
//       ReturnType<RegistrationUpgradeable["getUserLimits"]>
//     >
//   };
// };
