const Web3 = require('web3')

const { NETWORK, getProvider } = require('./const.js')
const lendingPoolConfigurator = require('../side/LendingPoolConfigurator.sol/LendingPoolConfigurator.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

// !!! IMPORTANT SET LendingPoolConfiguratorAddress
const LendingPoolConfiguratorAddress = '';

const go = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        if (!LendingPoolConfiguratorAddress) console.log('error: set LendingPoolConfiguratorAddress !');

        const lpConf = new web3.eth.Contract(lendingPoolConfigurator.abi, LendingPoolConfiguratorAddress);
        await lpConf.methods.setPoolPause(false).send({from: accounts[0]}).then((result) => {
            console.log('setting unpause: ', result.status);
        });


        console.log('finished...');
    } catch (error) {
        console.error('An error occurred:\n', error)
    }
}

go()
