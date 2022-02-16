const Web3 = require('web3')

const { NETWORK, getProvider} = require('./const')
const fallback = require('../artifacts/contracts/fallback/AaveFallbackOracle.sol/AaveFallbackOracle.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const deployAaveFallbackOracle = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy AaveFallbackOracle from the account', accounts[0])

        const deployedToken = await new web3.eth.Contract(fallback.abi)
            .deploy({
                data: fallback.bytecode,
            })
            .send({
                from: accounts[0]
            })
        console.log('AaveFallbackOracle deployed to: ',  deployedToken.options.address);

        console.log('finished...');

    } catch (error) {
        console.error('An error occurred in deployAaveFallbackOracle():\n', error)
    }
}

deployAaveFallbackOracle()
