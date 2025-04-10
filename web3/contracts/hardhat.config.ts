// Author: MartianAcademy
// Contact: martianacademy@gmail.com
// Usage: Give credit to MartianAcademy

import { subtask, task } from "hardhat/config";

// Importing necessary modules and types from Hardhat and other libraries
import "@nomicfoundation/hardhat-toolbox"; // Toolbox for Hardhat with commonly used plugins
import "@openzeppelin/hardhat-upgrades"; // Plugin for upgrading smart contracts
import "@tenderly/hardhat-tenderly"; // Tenderly integration for Hardhat
import dotenv from "dotenv"; // Module for loading environment variables
import fs from "fs";
import { HardhatUserConfig } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import path from "path";

// Load environment variables from the .env file
dotenv.config();

// Retrieve the private key from environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) {
  throw new Error("PRIVATE_KEY is undefined");
}

// Retrieve the Polygon API key from environment variables
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
if (!POLYGON_API_KEY) {
  throw new Error("POLYGON_API_KEY is undefined");
}

// Retrieve the Polygon API key from environment variables
const BSC_MAINNET_KEY = process.env.BSC_MAINNET_KEY;
if (!BSC_MAINNET_KEY) {
  throw new Error("BSC_MAINNET_KEY is undefined");
}

// Retrieve the Polygon API key from environment variables
const TENDERLY_BSC_PUBLIC_RPC = process.env.TENDERLY_BSC_PUBLIC_RPC;
if (!TENDERLY_BSC_PUBLIC_RPC) {
  throw new Error("TENDERLY_BSC_PUBLIC_RPC is undefined");
}

// Retrieve Tenderly project name and username from environment variables
const TENDERLY_PROJECT_NAME = process.env.TENDERLY_PROJECT_NAME;
if (!TENDERLY_PROJECT_NAME) {
  throw new Error("TENDERLY_PROJECT_NAME is undefined");
}

const TENDERLY_USERNAME = process.env.TENDERLY_USERNAME;
if (!TENDERLY_USERNAME) {
  throw new Error("TENDERLY_USERNAME is undefined");
}

const TENDERLY_POLYGON_PUBLIC_RPC = process.env.TENDERLY_POLYGON_PUBLIC_RPC;
if (!TENDERLY_POLYGON_PUBLIC_RPC) {
  throw new Error("TENDERLY_POLYGON_PUBLIC_RPC is undefined");
}

// Hardhat configuration
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
            details: {
              yul: true,
              yulDetails: {
                stackAllocation: true
                // optimizerSteps:
                // "dhfoDgvulfnTUtnIf [xa]rrscLMcCTU [xa]rrscLMcCTU [xa]rrscLMcCTU [xa]rrscLMcCTU",
                // "dhfoDgvulfnTUtnIf"
              }
            }
          },
          viaIR: true,
          metadata: {
            bytecodeHash: "none"
          }
        }
      }
    ]
  },
  defaultNetwork: "bscTenderly",
  networks: {
    polygonTenderly: {
      url: TENDERLY_POLYGON_PUBLIC_RPC,
      accounts: [PRIVATE_KEY],
      loggingEnabled: true,
      gasMultiplier: 1.2
    },
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/qb4_kTeJaTEIuAJhGGppcSc6OtSnWzPF",
      accounts: [PRIVATE_KEY],
      loggingEnabled: true,
      gasMultiplier: 1.2
    },
    bscTenderly: {
      url: TENDERLY_BSC_PUBLIC_RPC,
      accounts: [PRIVATE_KEY],
      loggingEnabled: true,
      gasMultiplier: 1.2
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org/",
      accounts: [PRIVATE_KEY],
      loggingEnabled: true
    }
  },
  etherscan: {
    apiKey: {
      polygon: POLYGON_API_KEY,
      bsc: BSC_MAINNET_KEY
    }
  },
  sourcify: {
    enabled: true
  },
  tenderly: {
    project: TENDERLY_PROJECT_NAME,
    username: TENDERLY_USERNAME
  }
};

// Export the configuration
export default config;

task("export-abi", "Exports ABIs of compiled contracts")
  .addOptionalParam("out", "The output directory", "./contractDeployments/abis")
  .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
    const artifactPaths = await hre.artifacts.getArtifactPaths();
    const directoryToSaveDeployementDetails = "../contractDeploymentDetails";

    for (const artifactPath of artifactPaths) {
      const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf-8"));
      const contractName = artifact.contractName;
      const outDir = path.resolve(
        `${directoryToSaveDeployementDetails}/${contractName}`
      );
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      const abiPath = path.join(outDir, `${contractName}ABI.ts`);
      fs.writeFileSync(
        abiPath,
        `export const ${contractName}ABI = ${JSON.stringify(
          artifact.abi,
          null,
          2
        )} as const;`
      );
    }

    console.log(`✅ ABIs exported to: ${directoryToSaveDeployementDetails}`);
  });

// Hook into the compile process
subtask("compile:solidity", async (_, hre, runSuper) => {
  const result = await runSuper();
  await hre.run("export-abi");
  return result;
});
