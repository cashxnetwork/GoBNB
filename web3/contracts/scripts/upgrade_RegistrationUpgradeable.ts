import { RegistrationUpgradeableDeploymentDetails } from "../contractDeploymentDetails/RegistrationUpgradeable";
import { upgradeContract } from "./deploymentFunctions";

upgradeContract(RegistrationUpgradeableDeploymentDetails, true).then(() =>
  console.log("contract upgraded")
);
