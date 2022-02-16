const Web3 = require('web3')
const { NETWORK, getProvider } = require('./const')
const controller = require('../artifacts/contracts/requesterAccess/SimpleWriteAccessController.sol/SimpleWriteAccessController.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const deployRequesterAccessController = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy RequesterAccessController from the account', accounts[0])

        const deployedToken = await new web3.eth.Contract(controller.abi)
            .deploy({
                data: controller.bytecode
            })
            .send({
                from: accounts[0]
            })

        console.log('RequesterAccessController deployed to', deployedToken.options.address)
    } catch (error) {
        console.error('An error occurred in RequesterAccessController():\n', error)
    }
}

deployRequesterAccessController()
