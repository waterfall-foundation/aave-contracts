###install
открыть новую вкладку в терминале

```cd core_contracts```

```npm install```

## изменить настройки сети, добавить аккаунт
    поменять в файле hadrdhat.config.js
    поменть в файле /scripts/const.js

### запуск скрита
```npx hardhat run scripts/{название скрипта}.js --network waterfall```


## ШАГИ

#### 1. deploy link token
    npx hardhat run scripts/deployLinkToken.js --network waterfall
получить адрес ***LinkToken***

### 2. deploy accessController
    npx hardhat run scripts/deployBillingAccessController.js --network waterfall
    npx hardhat run scripts/deployRequesterAccessController.js --network waterfall

получить адрес контракта ***BillingAccessController***
получить адрес контракта ***RequesterAccessController***


### 3. deploy aggregators
в scripts/deployAccessControlledOffchainAggregator.js установить полученные адреса ***LinkToken***, ***BillingAccessController***, ***RequesterAccessController***

также в scripts/deployAggregatorEthUsd.js установить полученные адреса ***LinkToken***, ***BillingAccessController***, ***RequesterAccessController***

    npx hardhat run scripts/deployAccessControlledOffchainAggregator.js --network waterfall

получить адреса агрегаторов  

    npx hardhat run scripts/deployAggregatorEthUsd.js --network waterfall

получить адрес usd агрегатора

### 4. deploy chainlink
в script/deployEACAggregatorProxy.js в обьекте агрегаторов для сети waterfall, задать полученые адреса агрегаторов

    npx hardhat run scripts/deployEACAggregatorProxy.js --network waterfall
 
получить адреса chainlink контрактов

### 5. deploy other contracts
задеплоить дополнительыне контракты

    npx hardhat run scripts/deployReserveFactorTreasuryAddress.js --network waterfall
получить адрес ReserveFactorTreasury контракта

    npx hardhat run scripts/deployTokenDistributor.js --network waterfall
получить адрес TokenDistributor контракта

    npx hardhat run scripts/deployAaveFallbackOracle.js --network waterfall
получить адрес AaveFallbackOracle контракта

-------
### В резульате, должны быть адресса контрактов:
следующие контракты будут использоватся в aave-protocol

### 1) chainlink aggregators для:

***USD***

***ALEX***

***SERG***

***WWAT***

***NEHEMIA***

***RICHARD***

***LUKE***

***PEDRO***

***ROBERT***

***GEOFF***

### 2) ReserveFactorTreasury

### 3) TokenDistributor

### 4) AaveFallbackOracle

-------


## 6. после деплоя конрактов с aave-protocol  выполнить

в scripts/stopPause.js задать полученый адрес LendingPoolConfiguratorAddress, после выполнить

     npx hardhat run scripts/stopPause.js --network waterfall


