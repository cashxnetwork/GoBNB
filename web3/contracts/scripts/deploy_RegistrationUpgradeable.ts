import { deployUpgradeableContract } from "./deploymentFunctions";

async function main() {
  await deployUpgradeableContract("RegistrationUpgradeable", [], true);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
