const chalk = require('chalk');

function green() {
  console.log(chalk.green.call(chalk, ...arguments))
}

module.exports = async (hardhat) => {
  const { getNamedAccounts, deployments } = hardhat
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  // constants 
  const configurableReserve = await deploy(`Multicall`, {
    from: deployer,
    skipIfAlreadyDeployed: true
  })

  green(`Deployed Multicall at:  ${configurableReserve.address}`)

  green(`Done!`)
};
