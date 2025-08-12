import { ethers } from "hardhat";

async function main() {
  // Get the contract factory for "BirthdayPartyGuest"
  const BirthdayPartyGuest = await ethers.getContractFactory("BirthdayPartyGuest");

  // Deploy the contract
  const birthdayPartyGuest = await BirthdayPartyGuest.deploy();
  await birthdayPartyGuest.deployed();

  // Log the deployment address with the correct contract name
  console.log("BirthdayPartyGuest deployed to:", birthdayPartyGuest.address);
}

// Standard Hardhat pattern for running the script and handling errors
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
