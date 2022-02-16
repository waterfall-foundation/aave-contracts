const Web3 = require('web3')
const { NETWORK, getProvider } = require('./const')
const controller = require('../artifacts/contracts/TokenDistributor/InitializableAdminUpgradeabilityProxy.sol/InitializableAdminUpgradeabilityProxy.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const deployTokenDistributor = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy TokenDistributor from the account', accounts[0])

        const deployedToken = await new web3.eth.Contract(controller.abi)
            .deploy({
                data: controller.bytecode
            })
            .send({
                from: accounts[0]
            })

        console.log('TokenDistributor deployed to', deployedToken.options.address);
        console.log('finished...');
    } catch (error) {
        console.error('An error occurred in TokenDistributor():\n', error)
    }
}

deployTokenDistributor()
