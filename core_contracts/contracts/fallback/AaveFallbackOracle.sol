/**
 *Submitted for verification at Etherscan.io on 2020-11-13
*/

// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.4;
pragma experimental ABIEncoderV2;

/**
 * @dev Wrappers over Solidity's arithmetic operations with added overflow
 * checks.
 *
 * Arithmetic operations in Solidity wrap on overflow. This can easily result
 * in bugs, because programmers usually assume that an overflow raises an
 * error, which is the standard behavior in high level programming languages.
 * `SafeMath` restores this intuition by reverting the transaction when an
 * operation overflows.
 *
 * Using this library instead of the unchecked operations eliminates an entire
 * class of bugs, so it's recommended to use it always.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
   * overflow.
   *
   * Counterpart to Solidity's `+` operator.
   *
   * Requirements:
   * - Addition cannot overflow.
   */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, 'SafeMath: addition overflow');

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
   * overflow (when the result is negative).
   *
   * Counterpart to Solidity's `-` operator.
   *
   * Requirements:
   * - Subtraction cannot overflow.
   */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, 'SafeMath: subtraction overflow');
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
   * overflow (when the result is negative).
   *
   * Counterpart to Solidity's `-` operator.
   *
   * Requirements:
   * - Subtraction cannot overflow.
   */
    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
   * overflow.
   *
   * Counterpart to Solidity's `*` operator.
   *
   * Requirements:
   * - Multiplication cannot overflow.
   */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, 'SafeMath: multiplication overflow');

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
   * division by zero. The result is rounded towards zero.
   *
   * Counterpart to Solidity's `/` operator. Note: this function uses a
   * `revert` opcode (which leaves remaining gas untouched) while Solidity
   * uses an invalid opcode to revert (consuming all remaining gas).
   *
   * Requirements:
   * - The divisor cannot be zero.
   */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, 'SafeMath: division by zero');
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
   * division by zero. The result is rounded towards zero.
   *
   * Counterpart to Solidity's `/` operator. Note: this function uses a
   * `revert` opcode (which leaves remaining gas untouched) while Solidity
   * uses an invalid opcode to revert (consuming all remaining gas).
   *
   * Requirements:
   * - The divisor cannot be zero.
   */
    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
   * Reverts when dividing by zero.
   *
   * Counterpart to Solidity's `%` operator. This function uses a `revert`
   * opcode (which leaves remaining gas untouched) while Solidity uses an
   * invalid opcode to revert (consuming all remaining gas).
   *
   * Requirements:
   * - The divisor cannot be zero.
   */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, 'SafeMath: modulo by zero');
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
   * Reverts with custom message when dividing by zero.
   *
   * Counterpart to Solidity's `%` operator. This function uses a `revert`
   * opcode (which leaves remaining gas untouched) while Solidity uses an
   * invalid opcode to revert (consuming all remaining gas).
   *
   * Requirements:
   * - The divisor cannot be zero.
   */
    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

/**
 * @title IPriceOracleGetter interface
 * @notice Interface for the Aave price oracle.
 **/

interface IPriceOracleGetter {
    /**
     * @dev returns the asset price in ETH wei
   * @param asset the address of the asset
   **/
    function getAssetPrice(address asset) external view returns (uint256);
}

contract AaveFallbackOracle is IPriceOracleGetter {
    using SafeMath for uint256;

    struct Price {
        uint64 blockNumber;
        uint64 blockTimestamp;
        uint128 price;
    }

    event PricesSubmitted(address sybil, address[] assets, uint128[] prices);

    uint256 public constant PERCENTAGE_BASE = 1e4;

    mapping(address => Price) private _prices;

    modifier onlySybil {
        _requireWhitelistedSybil(msg.sender);
        _;
    }

    function submitPrices(address[] calldata assets, uint128[] calldata prices) external onlySybil {
        require(assets.length == prices.length, 'INCONSISTENT_PARAMS_LENGTH');
        for (uint256 i = 0; i < assets.length; i++) {
            _prices[assets[i]] = Price(uint64(block.number), uint64(block.timestamp), prices[i]);
        }

        emit PricesSubmitted(msg.sender, assets, prices);
    }

    function getAssetPrice(address asset) external override view returns (uint256) {
        return uint256(_prices[asset].price);
    }

    function isSybilWhitelisted(address sybil) public pure returns (bool) {
        return sybil == 0xdE715503E63e6A148F55a20F0a81a02FeF81B884;
    }

    function getPricesData(address[] calldata assets) external view returns (Price[] memory) {
        Price[] memory result = new Price[](assets.length);
        for (uint256 i = 0; i < assets.length; i++) {
            result[i] = _prices[assets[i]];
        }
        return result;
    }

    function filterCandidatePricesByDeviation(
        uint256 deviation,
        address[] calldata assets,
        uint256[] calldata candidatePrices
    ) external view returns (address[] memory, uint256[] memory) {
        require(assets.length == candidatePrices.length, 'INCONSISTENT_PARAMS_LENGTH');
        address[] memory filteredAssetsWith0s = new address[](assets.length);
        uint256[] memory filteredCandidatesWith0s = new uint256[](assets.length);
        uint256 end0sInLists;
        for (uint256 i = 0; i < assets.length; i++) {
            uint128 currentOraclePrice = _prices[assets[i]].price;
            if (
                uint256(currentOraclePrice) >
                candidatePrices[i].mul(PERCENTAGE_BASE.add(deviation)).div(PERCENTAGE_BASE) ||
                uint256(currentOraclePrice) <
                candidatePrices[i].mul(PERCENTAGE_BASE.sub(deviation)).div(PERCENTAGE_BASE)
            ) {
                filteredAssetsWith0s[end0sInLists] = assets[i];
                filteredCandidatesWith0s[end0sInLists] = candidatePrices[i];
                end0sInLists++;
            }
        }
        address[] memory resultAssets = new address[](end0sInLists);
        uint256[] memory resultPrices = new uint256[](end0sInLists);
        for (uint256 i = 0; i < end0sInLists; i++) {
            resultAssets[i] = filteredAssetsWith0s[i];
            resultPrices[i] = filteredCandidatesWith0s[i];
        }

        return (resultAssets, resultPrices);
    }

    function _requireWhitelistedSybil(address sybil) internal pure {
        require(isSybilWhitelisted(sybil), 'INVALID_SYBIL');
    }
}