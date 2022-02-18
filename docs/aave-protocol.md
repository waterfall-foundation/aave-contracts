## 1. install packages
```
    cd aave-protocol
    npm install
```

## 1. Поменять настройки сети waterfall в  settings in hardhat.config.ts

## 2. create env file
если отсутствует .env файл, создать .env file

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
в `MNEMONIC` указать приватный ключ

## 3. set deployed contracts.

1) список задеплоеных контрактов указать в markets/aave/index.ts в ReserveAssets для сети watefall

   - ALEX: '0x41D062A6AB259E07D96DB88E7BbfC0840f8584c1'
   - SERG: '0xa4cf7cCBfE74165DAba4E0b490Fe716060816d3F'
   - WWAT: указать адрес WWAT токена
   - NEHEMIA: '0xAec7FCD1C2D7BFE7620765C273923EDcD913E6C8'
   - RICHARD: '0x2E035C1Fcb180A5ad410c5507E03d740F7Fb5A50'
   - LUKE: '0x9260a1c9b4edcC56629c295dEE44Ed9126C6020E'
   - PEDRO: '0xEcF9aA721B1681ac340Bb71b2C815360349736d3'
   - ROBERT: '0x0E92c9a5598c66DCf4D1fa152eA2aBf04d8478EF'
   - GEOFF: '0x052e57ce096b1061bE8C25aF4c3bFF53552FcC48'
   

2) полученые адреса контрактов из core_contracts указать в markets/aave/common.ts
    
    - **ProviderRegistryOwner** указать адрес аккаунта с которого деплоим
    - **LendingRateOracle** указать ``ZERO_ADDRESS``
    - **LendingPoolCollateralManager** указать ``''``
    - **LendingPoolConfigurator** указать ``''``
    - **LendingPool** указать ``''``
    - **WethGateway** указать ``''``
    - **TokenDistributor** указать полученый адрес TokenDistributor из core_contracts
    - **AaveOracle** указать ``ZERO_ADDRESS``
    - **FallbackOracle** указать указать полученый адрес AaveFallbackOracle из core_contracts
    - **ChainlinkAggregator** для токенов указать адреса chainlink aggregators полученых из из core_contracts
    - **WETH** указать адрес ``WWAT`` токена
    - **WrappedNativeToken** указать адрес ``WWAT`` токена
    - **ReserveFactorTreasuryAddress** указать полученый адрес ReserveFactorTreasury из core_contracts
    - **IncentivesController** ``ZERO_ADDRESS``
    
3) в файле /helpers/constants.ts в обьекте `chainlinkAggregatorProxy` и `chainlinkEthUsdAggregatorProxy` указать адрес **chainlink usd aggregator** задеплоенный из core_contracts 




## 4. contracts deployments
### деплой контрактов в сеть waterfall 

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

## 5. Настройка aave-ui

----
    полученые адреса контрактов : 
    - walletBalanceProvider
    - uiPoolDataProvider
    - uiIncentiveDataProvider

    - baseAssetWrappedAddress указать адрес WWAT токена
    - rewardTokenAddress указать адрес WWAT токена

указать в aave-ui в `/src/ui-config/networks.ts` в настройке сети waterfall

----

    полученые адреса контрактов :

    - LENDING_POOL_ADDRESS_PROVIDER
    - LENDING_POOL
    - WETH_GATEWAY

указать в aave-ui в `src/ui-config/markets/index.ts` в настройке маркета waterfall

----

## 6. выполнить 6-ой пункт в docs/core_contracts.md, указав полученый адрес LendingPoolConfiguratorAddress
