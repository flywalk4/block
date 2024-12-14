import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "ToDoList" using the deployer account.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployToDoList: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy the ToDoList contract
  await deploy("ToDoList", {
    from: deployer,
    args: [],  
    log: true,
    autoMine: true,  
  });

  const toDoList = await hre.ethers.getContract<Contract>("ToDoList", deployer);
  console.log("Deployed ToDoList contract at:", toDoList.address);
};

export default deployToDoList;

deployToDoList.tags = ["ToDoList"];
