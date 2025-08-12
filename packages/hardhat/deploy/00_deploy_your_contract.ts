import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployBirthdayPartyGuest: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("BirthdayPartyGuest", {
    from: deployer,
    args: [], // no constructor args
    log: true,
    autoMine: true, // speed up on local network
  });
};

export default deployBirthdayPartyGuest;
deployBirthdayPartyGuest.tags = ["BirthdayPartyGuest"];
