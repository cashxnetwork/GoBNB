export const RegistrationUpgradeableABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      }
    ],
    "name": "AddressEmptyCode",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "ERC1967InvalidImplementation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ERC1967NonPayable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FailedCall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "UUPSUnauthorizedCallContext",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "slot",
        "type": "bytes32"
      }
    ],
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "AddedToRandomList",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "version",
        "type": "uint64"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "by",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "ParentAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "valueInWei",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "level",
        "type": "uint32"
      }
    ],
    "name": "ReferralRewardsPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "by",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "ReferrerAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "ReferrerNoAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "by",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "valueInWei",
        "type": "uint256"
      }
    ],
    "name": "Registration",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "by",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "RegistrationAssigned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "RemovedFromRandomList",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "level",
        "type": "uint32"
      }
    ],
    "name": "TeamAddressAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "valueInWei",
        "type": "uint256"
      }
    ],
    "name": "TeamWalletRewardPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "UpgradeRewardNotPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "by",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "valueInWei",
        "type": "uint256"
      }
    ],
    "name": "UpgradeRewardPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "WeeklyRewardNotPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "valueInWei",
        "type": "uint256"
      }
    ],
    "name": "WeeklyRewardPaid",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "UPGRADE_INTERFACE_VERSION",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_chainLinkOracleAddress",
        "type": "address"
      }
    ],
    "name": "checkIfChainLinkOracleAddressSupporeted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_chainLinkOracleAddress",
        "type": "address"
      }
    ],
    "name": "distributeWeeklyReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllUsers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getContractDefaults",
    "outputs": [
      {
        "internalType": "address",
        "name": "teamWallet",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "teamWalletRate",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "liquidityWallet",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "liquidityCreationrate",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "defaultReferrer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "registrationValueInUSD",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_chainLinkOracleAddress",
        "type": "address"
      }
    ],
    "name": "getNativePriceInUSD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRandomUserList",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRegistrationsStats",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "totalUser",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "totalRegistrationValueInUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalReferralPaidInUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeeklyRewardsPaidInUSD",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSupportedChainLinkOracleAddress",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getUpgradePlans",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint8",
            "name": "id",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "valueToUpgradeInUSD",
            "type": "uint256"
          }
        ],
        "internalType": "struct UpgradeStruct[]",
        "name": "upgradePlans",
        "type": "tuple[]"
      },
      {
        "internalType": "uint8",
        "name": "upgradePlansCount",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_id",
        "type": "uint8"
      }
    ],
    "name": "getUpgradePlansById",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint8",
            "name": "id",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "valueToUpgradeInUSD",
            "type": "uint256"
          }
        ],
        "internalType": "struct UpgradeStruct",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "getUserAccount",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "self",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "parent",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "referee",
            "type": "address[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "referee",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "assignedTo",
                "type": "address"
              }
            ],
            "internalType": "struct RefereeStruct[]",
            "name": "refereeAssigned",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "teamMember",
                "type": "address"
              },
              {
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
              }
            ],
            "internalType": "struct TeamStruct[]",
            "name": "team",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "selfBusinessInUSD",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "upgradedValueInUSD",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "upgradeId",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "directBusinessInUSD",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "teamBusinessInUSD",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "referralRewardsInUSD",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "weeklyRewardsInUSD",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "upgradeRewardsInUSD",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "userRandomIndex",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestampJoined",
            "type": "uint256"
          }
        ],
        "internalType": "struct AccountStruct",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "getUserBusiness",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "selfBusinessInUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "directBusinessInUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "teamBusinessInUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalBusinessInUSD",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "getUserCurrentUpgradeLevel",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "level",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "totalUpgradeValueInUSD",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "getUserRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "referralRewardInUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "weeklyRewardInUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "upgradeRewardsInUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalRewards",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "getUserTeam",
    "outputs": [
      {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "referees",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "refereeCount",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "referee",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "assignedTo",
            "type": "address"
          }
        ],
        "internalType": "struct RefereeStruct[]",
        "name": "refereeAssigned",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "refereeAssignedCount",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "teamMember",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "level",
            "type": "uint8"
          }
        ],
        "internalType": "struct TeamStruct[]",
        "name": "team",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "teamCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWeeklyRewardToBeDistributed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_rewardValue",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_remianingTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_endTime",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_chainLinkOracleAddress",
        "type": "address"
      }
    ],
    "name": "needNativeToRegister",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_referrer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_chainLinkOracleAddress",
        "type": "address"
      }
    ],
    "name": "registrationNative",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_chainLinkOracleAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_status",
        "type": "bool"
      }
    ],
    "name": "setChainLinkOracleAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_valueToUpgradeInDecimals",
        "type": "uint256[]"
      }
    ],
    "name": "updateUpgradePlans",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_chainLinkOracleAddress",
        "type": "address"
      }
    ],
    "name": "upgradeAccountNative",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const;