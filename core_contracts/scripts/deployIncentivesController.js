//
// const Web3 = require('web3')
//
// const { NETWORK, getProvider } = require('./const')
// const controller = require('../artifacts/contracts/IncentivesController/InitializableImmutableAdminUpgradeabilityProxy.sol/InitializableImmutableAdminUpgradeabilityProxy.json')
//
//
// const lendingPollProvider = '0x556125b36335AF87fb2351bE62DCD24F6d4CC2FF';
//
// const provider = getProvider(network)
//
// const web3 = new Web3(provider)
//
// const deployIncentivesController = async () => {
//     try {
//         const accounts = await web3.eth.getAccounts()
//
//         console.log('Attempting to deploy EACAggregatorProxy from the account', accounts[0])
//
//         const deployedToken = await new web3.eth.Contract(controller.abi)
//             .deploy({
//                 data: controller.bytecode,
//                 arguments: [lendingPollProvider]
//             })
//             .send({
//                 from: accounts[0]
//             })
//
//         console.log('Incentives deployed to', deployedToken.options.address)
//     } catch (error) {
//         console.error('An error occurred in deployAccessControlledOffchainAggregator():\n', error)
//     }
// }
//
// deployIncentivesController()
