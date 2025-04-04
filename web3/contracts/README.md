# Presale with Referral Upgradeable Contract

## Overview

The **Presale with Referral** project provides a decentralized presale platform that allows users to invest in various tokens while benefiting from referral capabilities. This repository contains the code for the `PresaleWithReferralUpgradeable` smart contract, which enables the management of supported tokens and referral rates during the presale phase.

## Features

- **Upgradeable Contract**: Easily upgrade the contract logic while preserving the state.
- **Referral System**: Users can earn rewards through referrals.
- **Support for Native and Custom Tokens**: The contract supports both native tokens and project-specific tokens.
- **Minimum Contribution Management**: Set a minimum contribution requirement for participants.
- **Initial Pricing Configuration**: Configure initial token prices during deployment.

## Contract Structure

The `PresaleWithReferralUpgradeable` contract includes the following key components:

- **Supported Tokens**: The contract supports both native and custom tokens defined by the `SupportedTokenArgs` type.
- **Referral Rates**: Configurable referral rates to incentivize user participation.
- **Admin Management**: Designate an admin address for contract management.

### Token Structure

```typescript
export type SupportedTokenArgs = [
  boolean, // isActive: status
  boolean, // isNative: status
  `0x${string}`, // contractAddress
  `0x${string}`, // chainLinkAggregatorV3Address
  string, // name
  string, // symbol
  number // decimals
];
```
