import { zeroAddress } from "viem";

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
