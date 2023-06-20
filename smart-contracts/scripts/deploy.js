const hre = require('hardhat')

async function main() {
  const CountryToken = await hre.ethers.getContractFactory('CountryToken')
  const oceanToken = await CountryToken.deploy(100000000)

  await oceanToken.deployed()

  console.log('CountryToken deployed to:', oceanToken.address)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
