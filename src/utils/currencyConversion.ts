import { WcAndSupportedTokenType } from "../constants/types";

/**
 * Converts a USD amount to token value
 * @param usdAmount Amount in USD
 * @param token Token details including price and decimals
 * @returns Token amount in smallest unit (wei, satoshi, etc.)
 */
export const usdToTokenValue = (
  formattedUSDAmount: number,
  token: WcAndSupportedTokenType
): number => {
  if (!token?.balance?.tokenPrice || token?.balance?.tokenPrice === 0) {
    return 0;
  }

  const tokenPrice = token?.balance?.tokenPrice;
  const tokenAmount = formattedUSDAmount / tokenPrice;

  return Number(tokenAmount);
};

/**
 * Converts a token amount to USD value
 * @param tokenAmount Token amount in smallest unit (wei, satoshi, etc.)
 * @param token Token details including price and decimals
 * @returns USD value as a number with 2 decimal places
 */
export const tokenToUsdValue = (
  formattedAmount: number,
  token: WcAndSupportedTokenType
): number => {
  if (!token?.balance?.tokenPrice || token?.balance?.tokenPrice === 0) {
    return 0;
  }

  const tokenPrice = token?.balance?.tokenPrice;
  return Number(formattedAmount * tokenPrice);
};
