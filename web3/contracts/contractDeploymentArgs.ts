import { parseEther, zeroAddress } from "viem";
import { polygon } from "viem/chains";
import {
  StructPerWithDivisionStruct,
  StructSupportedTokenStruct,
  StructInvestmentPlanStruct,
  StructReferralRatesStruct,
  StructRewardObjectDefaultsStruct
} from "./typechain-types/contracts/DefaultsUpgradeable";
import { BeneficiaryContractUpgradeableDeploymentDetails } from "./contractDeploymentDetails/BeneficiaryContractUpgradeable";
import { OrbitEdgeDeploymentDetails } from "./contractDeploymentDetails/OrbitEdge";

// Enums
export enum InvestmentType {
  Subscription = 0,
  Investment = 1,
  Presale = 2
}

export enum BusinessType {
  Self = 0,
  Direct = 1,
  Team = 2
}

export enum RewardType {
  Referral = 0,
  RoiReferral = 1,
  InvestmentROI = 2,
  Subscription = 3,
  Club = 4,
  Community = 5,
  Bonanza = 6,
  Performance = 7,
  Others = 8,
  InitialCalReward = 9
}

export enum ContractType {
  Registration = 0,
  Invest = 1,
  Rewards = 2,
  UniswapV2Router = 3
}

type ContractConfig = {
  [chainId: number]: {
    supportedTokens: {
      nativeToken: StructSupportedTokenStruct;
      projectToken: StructSupportedTokenStruct;
      stableToken: StructSupportedTokenStruct;
      tradeTokens: StructSupportedTokenStruct[];
    };
    investmentPlans: StructInvestmentPlanStruct[];
    referralRates: StructReferralRatesStruct[];
    roiReferralRates: StructReferralRatesStruct[];
    clubRewards: StructRewardObjectDefaultsStruct[];
    performanceRewards: StructRewardObjectDefaultsStruct[];
    marketingWallet: {
      address: string;
      per: StructPerWithDivisionStruct;
    };
    developmentWallet: {
      address: string;
      per: StructPerWithDivisionStruct;
    };
    uniswapV2RouterAddress: string;
    beneficiaryContract: string;
    beneficiariesWalletAddresses: string[];
  };
};

export const contractConfigAndDefaults: ContractConfig = {
  [polygon.id]: {
    supportedTokens: {
      nativeToken: {
        isActive: true,
        isNative: true,
        name: "Native",
        symbol: "MATIC",
        decimals: 18,
        contractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        chainLinkAggregatorV3Address:
          "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
      },
      stableToken: {
        isActive: true,
        isNative: false,
        name: "Tether",
        symbol: "USDT",
        decimals: 6,
        contractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        chainLinkAggregatorV3Address:
          "0x0A6513e40db6EB1b165753AD52E80663aeA50545"
      },
      projectToken: {
        isActive: true,
        isNative: false,
        name: "OrbitEdge",
        symbol: "ORBD",
        decimals: 18,
        contractAddress: OrbitEdgeDeploymentDetails[polygon.id].proxyAddress,
        chainLinkAggregatorV3Address: zeroAddress
      },
      tradeTokens: [
        {
          isActive: true,
          isNative: true,
          name: "Native",
          symbol: "Native",
          contractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          decimals: 18,
          chainLinkAggregatorV3Address:
            "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
        },
        {
          isActive: true,
          isNative: false,
          name: "Dai Stablecoin",
          symbol: "DAI",
          contractAddress: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
          chainLinkAggregatorV3Address:
            "0x4746dec9e833a82ec7c2c1356372ccf2cfcd2f3d",
          decimals: 18
        },
        {
          isActive: true,
          isNative: false,
          name: "Tether",
          symbol: "USDT",
          contractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
          chainLinkAggregatorV3Address:
            "0x0A6513e40db6EB1b165753AD52E80663aeA50545",
          decimals: 18
        },
        {
          isActive: true,
          isNative: false,
          name: "USD Coin",
          symbol: "USDC",
          contractAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
          chainLinkAggregatorV3Address:
            "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7",
          decimals: 18
        },
        {
          isActive: true,
          isNative: false,
          name: "ChainLink",
          symbol: "LINK",
          contractAddress: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
          chainLinkAggregatorV3Address:
            "0xd9FFdb71EbE7496cC440152d43986Aae0AB76665",
          decimals: 18
        }
      ]
    },

    investmentPlans: [
      {
        id: BigInt(1),
        name: "Subscription",
        isActive: true,
        investmentType: BigInt(InvestmentType.Subscription),
        requireSubscription: false,
        fixedValueInUSD: BigInt(100e18), // 100 USD in wei
        minContribution: BigInt(100e18),
        isPayReferral: true,
        isPayRefferalOnROI: false,
        duration: BigInt(365 * 86400), // 365 days in seconds
        perApy: {
          per: BigInt(0),
          division: BigInt(1)
        } as StructPerWithDivisionStruct,
        maxLimitMultiplier: {
          per: BigInt(0),
          division: BigInt(1)
        } as StructPerWithDivisionStruct
      },
      {
        id: BigInt(1),
        name: "Nebula Voyager",
        isActive: true,
        investmentType: BigInt(InvestmentType.Investment),
        requireSubscription: true,
        fixedValueInUSD: BigInt(0),
        minContribution: parseEther("100"), // 100 USD in wei
        isPayReferral: false,
        isPayRefferalOnROI: true,
        duration: BigInt(0), // 365 days in seconds
        perApy: {
          per: BigInt(60),
          division: BigInt(100)
        } as StructPerWithDivisionStruct,
        maxLimitMultiplier: {
          per: BigInt(0),
          division: BigInt(1)
        } as StructPerWithDivisionStruct
      },
      {
        id: BigInt(2),
        name: "Nova Elite",
        isActive: true,
        investmentType: BigInt(InvestmentType.Investment),
        requireSubscription: true,
        fixedValueInUSD: BigInt(0),
        minContribution: parseEther("3000"), // 3000 USD in wei
        isPayReferral: false,
        isPayRefferalOnROI: true,
        duration: BigInt(0), // 365 days in seconds
        perApy: {
          per: BigInt(72),
          division: BigInt(100)
        } as StructPerWithDivisionStruct,
        maxLimitMultiplier: {
          per: BigInt(0),
          division: BigInt(1)
        } as StructPerWithDivisionStruct
      },
      {
        id: BigInt(3),
        name: "Pulsar Prime",
        isActive: true,
        investmentType: BigInt(InvestmentType.Investment),
        requireSubscription: true,
        fixedValueInUSD: BigInt(0),
        minContribution: parseEther("5000"), // 5000 USD in wei
        isPayReferral: false,
        isPayRefferalOnROI: true,
        duration: BigInt(0), // 365 days in seconds
        perApy: {
          per: BigInt(84),
          division: BigInt(100)
        } as StructPerWithDivisionStruct,
        maxLimitMultiplier: {
          per: BigInt(0),
          division: BigInt(1)
        } as StructPerWithDivisionStruct
      },
      {
        id: BigInt(4),
        name: "Stellar Sentinel",
        isActive: true,
        investmentType: BigInt(InvestmentType.Investment),
        requireSubscription: true,
        fixedValueInUSD: BigInt(0),
        minContribution: parseEther("10000"), // 10000 USD in wei
        isPayReferral: false,
        isPayRefferalOnROI: true,
        duration: BigInt(0),
        perApy: {
          per: BigInt(96),
          division: BigInt(100)
        } as StructPerWithDivisionStruct,
        maxLimitMultiplier: {
          per: BigInt(0),
          division: BigInt(1)
        } as StructPerWithDivisionStruct
      },
      {
        id: BigInt(1),
        name: "Presale",
        isActive: true,
        investmentType: BigInt(InvestmentType.Presale),
        requireSubscription: false,
        fixedValueInUSD: BigInt(0),
        minContribution: BigInt(0), // 10000 USD in wei
        isPayReferral: true,
        isPayRefferalOnROI: false,
        duration: BigInt(0),
        perApy: {
          per: BigInt(0),
          division: BigInt(1)
        } as StructPerWithDivisionStruct,
        maxLimitMultiplier: {
          per: BigInt(0),
          division: BigInt(1)
        } as StructPerWithDivisionStruct
      }
    ],

    referralRates: [
      {
        referralRate: { per: 25, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 0
      },
      {
        referralRate: { per: 15, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 2
      },
      {
        referralRate: { per: 10, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 3
      },
      {
        referralRate: { per: 7, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 4
      },
      {
        referralRate: { per: 5, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 5
      },
      {
        referralRate: { per: 3, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 6
      },
      {
        referralRate: { per: 2, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 7
      },
      {
        referralRate: { per: 1, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 8
      },
      {
        referralRate: { per: 1, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 9
      },
      {
        referralRate: { per: 1, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 10
      }
    ],

    roiReferralRates: [
      {
        referralRate: { per: 15, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 0
      },
      {
        referralRate: { per: 10, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 2
      },
      {
        referralRate: { per: 5, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 3
      },
      {
        referralRate: { per: 4, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 4
      },
      {
        referralRate: { per: 3, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 5
      },
      {
        referralRate: { per: 2, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 6
      },
      {
        referralRate: { per: 1, division: 100 } as StructPerWithDivisionStruct,
        levelCondition: 7
      },
      {
        referralRate: { per: 5, division: 1000 } as StructPerWithDivisionStruct,
        levelCondition: 8
      },
      {
        referralRate: { per: 5, division: 1000 } as StructPerWithDivisionStruct,
        levelCondition: 9
      },
      {
        referralRate: { per: 5, division: 1000 } as StructPerWithDivisionStruct,
        levelCondition: 10
      }
    ],
    clubRewards: [],
    performanceRewards: [],
    marketingWallet: {
      address: "0xC3bbCccDd6E2274A423CfA1f71aF4805633A6be6",
      per: { per: 40, division: 100 }
    },
    developmentWallet: {
      address: "0xAb7257BF970f04dc839E098C033E7edee6490d5C",
      per: { per: 20, division: 100 }
    },
    uniswapV2RouterAddress: "0xedf6066a2b290C185783862C7F4776A2C8077AD1", // uniswap v2 router address
    beneficiaryContract:
      BeneficiaryContractUpgradeableDeploymentDetails[polygon.id]?.proxyAddress,
    beneficiariesWalletAddresses: ["0xC3bbCccDd6E2274A423CfA1f71aF4805633A6be6"]
  }
};
