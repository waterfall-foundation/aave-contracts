const Web3 = require('web3')
const { NETWORK, getProvider } = require('./const')
const controller = require('../artifacts/contracts/UniswapRouter/MockUniswapV2Router02.sol/MockUniswapV2Router02.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const deployUniswapRouter = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy UniswapRouter from the account', accounts[0])

        const deployedToken = await new web3.eth.Contract(controller.abi)
            .deploy({
                data: controller.bytecode
            })
            .send({
                from: accounts[0]
            })

        console.log('UniswapRouter deployed to', deployedToken.options.address);
        console.log('finished...');
    } catch (error) {
        console.error('An error occurred in UniswapRouter():\n', error)
    }
}

deployUniswapRouter()
