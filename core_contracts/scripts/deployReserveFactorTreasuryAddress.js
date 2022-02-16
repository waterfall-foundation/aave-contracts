const Web3 = require('web3')
const { NETWORK, getProvider } = require('./const')
const controller = require('../artifacts/contracts/ReserveFactorTreasuryAddress/InitializableAdminUpgradeabilityProxy.sol/InitializableAdminUpgradeabilityProxy.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const deployReserveFactorTreasuryAddress = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy ReserveFactorTreasuryAddress from the account', accounts[0])

        const deployedToken = await new web3.eth.Contract(controller.abi)
            .deploy({
                data: controller.bytecode
            })
            .send({
                from: accounts[0]
            })

        console.log('ReserveFactorTreasuryAddress deployed to', deployedToken.options.address)
    } catch (error) {
        console.error('An error occurred in ReserveFactorTreasuryAddress():\n', error)
    }
}

deployReserveFactorTreasuryAddress()
