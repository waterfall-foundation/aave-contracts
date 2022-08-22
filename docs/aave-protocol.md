## 1. install packages
```
    cd aave-protocol
    npm install
```

## 1. Change the waterfall network settings in settings in hardhat.config.ts

## 2. create env file
If there is no .env file, create a .env file

```
# Mnemonic, only first address will be used
MNEMONIC=""
# Add Alchemy or Infura provider keys, alchemy takes preference at the config level
ALCHEMY_KEY=""
INFURA_KEY=""
# Optional Etherscan key, for automatize the verification of the contracts at Etherscan
ETHERSCAN_KEY=""
# Optional, if you plan to use Tenderly scripts
TENDERLY_PROJECT=""
TENDERLY_USERNAME=""
```
in `MNEMONIC` specify a private key

## 3. set deployed contracts.

1) specify the list of deposited contracts in markets/aave/index.ts in ReserveAssets for the watefall network

   - ALEX: '0x41D062A6AB259E07D96DB88E7BbfC0840f8584c1'
   - SERG: '0xa4cf7cCBfE74165DAba4E0b490Fe716060816d3F'
   - WWAT: enter the WWAT token address
   - NEHEMIA: '0xAec7FCD1C2D7BFE7620765C273923EDcD913E6C8'
   - RICHARD: '0x2E035C1Fcb180A5ad410c5507E03d740F7Fb5A50'
   - LUKE: '0x9260a1c9b4edcC56629c295dEE44Ed9126C6020E'
   - PEDRO: '0xEcF9aA721B1681ac340Bb71b2C815360349736d3'
   - ROBERT: '0x0E92c9a5598c66DCf4D1fa152eA2aBf04d8478EF'
   - GEOFF: '0x052e57ce096b1061bE8C25aF4c3bFF53552FcC48'
   

2) Enter the contract addresses from core_contracts into markets/aave/common.ts
    
    - **ProviderRegistryOwner** specify the address of the account from which we deposit.
    - **LendingRateOracle** specify ``ZERO_ADDRESS``
    - **LendingPoolCollateralManager** specify ``''``
    - **LendingPoolConfigurator** specify ``''``
    - **LendingPool** specify ``''``
    - **WethGateway** specify ``''``
    - **TokenDistributor** specify the received TokenDistributor address from core_contracts
    - **AaveOracle** specify ``ZERO_ADDRESS``
    - **FallbackOracle** specify the received AaveFallbackOracle address from core_contracts
    - **ChainlinkAggregator** for tokens, specify the addresses of chainlink aggregators obtained from core_contracts
    - **WETH** указать адрес ``WWAT`` token
    - **WrappedNativeToken** specify the address of the  ``WWAT`` token
    - **ReserveFactorTreasuryAddress** specify the received ReserveFactorTreasury address from core_contracts
    - **IncentivesController** ``ZERO_ADDRESS``
    
3) In the /helpers/constants.ts file, in the `chainlinkAggregatorProxy` and `chainlinkEthUsdAggregatorProxy` objects, specify the address **chainlink usd aggregator** deposited from core_contracts 




## 4. contracts deployments
### Deploy contracts to the waterfall network 

```
# In one terminal
docker-compose up
# Open another tab or terminal
docker-compose exec contracts-env bash
# A new Bash terminal is prompted, connected to the container
npm run aave:waterfall:full:migration:add-registry

# deploy deployUIIncentivesProviderV2
npm run waterfall:deployUIIncentivesProviderV2
```

## 5. Setting up aave-ui
----
 received contract addresses : 
    - walletBalanceProvider
    - uiPoolDataProvider
    - uiIncentiveDataProvider

    - baseAssetWrappedAddress specify WWAT token address
    - rewardTokenAddress specify WWAT token address

specify in aave-ui in `/src/ui-config/networks.ts` in the waterfall network configuration

----

    obtained contract addresses :

    - LENDING_POOL_ADDRESS_PROVIDER
    - LENDING_POOL
    - WETH_GATEWAY

specify in aave-ui in `src/ui-config/markets/index.ts` in the waterfall marketplace setting

----

## 6. Perform the 6th item in docs/core_contracts.md, specifying the received LendingPoolConfiguratorAddress
