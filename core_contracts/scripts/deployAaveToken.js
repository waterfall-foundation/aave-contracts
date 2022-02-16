const Web3 = require('web3')
const { NETWORK, getProvider } = require('./const')
const aaveToken = require('../artifacts/contracts/AaveToken/AaveToken.sol/AaveToken.json')
const aProxy = require('../artifacts/contracts/AaveToken/InitializableAdminUpgradeabilityProxy.sol/InitializableAdminUpgradeabilityProxy.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const deployAaveToken = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy AaveToken from the account', accounts[0])

        const deployedToken = await new web3.eth.Contract(aaveToken.abi)
            .deploy({
                data: aaveToken.bytecode
            })
            .send({
                from: accounts[0]
            })
        console.log('AaveToken deployed to', deployedToken.options.address);

        console.log('Attempting to deploy InitializableAdminUpgradeabilityProxy');

        const proxy = await new web3.eth.Contract(aProxy.abi)
            .deploy({
                data: aProxy.bytecode
            })
            .send({
                from: accounts[0]
            })
        console.log('InitializableAdminUpgradeabilityProxy deployed to', proxy.options.address);

        console.log('finished...');
    } catch (error) {
        console.error('An error occurred:\n', error)
    }
}

deployAaveToken()
