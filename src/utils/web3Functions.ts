import { isAddress, zeroAddress } from "viem";

export const shortenAddress = (
  address: `0x${string}` | undefined,
  formatTo: number = 5
) => {
  if (!address) {
    address = zeroAddress;
  }

  const string1 = address?.slice(0, formatTo);
  const divider = "...";
  const string2 = address?.slice(-formatTo);

  return string1 + divider + string2;
};

export const isAddressValid = (address: string) => {
  if (!isAddress(address)) {
    return false;
  }
  return true;
};

export const sliceTransactionHash = (transactionHash: string): string => {
  const prefix = transactionHash.slice(0, 4);
  const body = "...";
  const suffix = transactionHash.slice(-4);

  return `${prefix}${body}${suffix}`;
};

export function formatNumberWithMaxDecimals(
  value: bigint | number,
  maxDecimals?: number
) {
  const formattedNumber = Number(value).toFixed(maxDecimals ?? 2);
  return formattedNumber.replace(/\.?0+$/, ""); // Removes trailing zeros
}
