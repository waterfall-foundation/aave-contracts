/**
 *Submitted for verification at Etherscan.io on 2020-11-19
*/

/**
 *Submitted for verification at Etherscan.io on 2020-11-17
*/

// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.8;

library SafeMath {
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

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, 'SafeMath: division by zero');
    }

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
}

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

interface IERC20Detailed {
    function decimals() external view returns (uint8);
}

interface IPriceOracleGetter {
    function getAssetPrice(address asset) external view returns (uint256);
}

contract MockUniswapV2Router02 {
    using SafeMath for uint256;

    IPriceOracleGetter public constant AAVE_ORACLE = IPriceOracleGetter(
        0xB8bE51E6563BB312Cbb2aa26e352516c25c26ac1
    );

    function getAmountsIn(uint256 amountOut, address[] memory path)
    public
    view
    returns (uint256[] memory)
    {
        IERC20Detailed assetIn = IERC20Detailed(path[0]);
        IERC20Detailed assetOut = IERC20Detailed(path[1]);
        uint256 priceAssetOut = AAVE_ORACLE.getAssetPrice(address(assetOut));
        uint256 priceAssetIn = AAVE_ORACLE.getAssetPrice(address(assetIn));
        uint256 decimalsAssetIn = uint256(assetIn.decimals());
        uint256 decimalsAssetOut = uint256(assetOut.decimals());

        uint256[] memory amounts = new uint256[](2);
        amounts[0] = priceAssetOut.mul(amountOut).mul(10**decimalsAssetIn).div(
            priceAssetIn.mul(10**decimalsAssetOut)
        );
        amounts[1] = amountOut;

        return amounts;
    }

    function getAmountsOut(uint256 amountIn, address[] memory path)
    public
    view
    returns (uint256[] memory)
    {
        IERC20Detailed assetIn = IERC20Detailed(path[0]);
        IERC20Detailed assetOut = IERC20Detailed(path[1]);
        uint256 priceAssetOut = AAVE_ORACLE.getAssetPrice(address(assetOut));
        uint256 priceAssetIn = AAVE_ORACLE.getAssetPrice(address(assetIn));
        uint256 decimalsAssetIn = uint256(assetIn.decimals());
        uint256 decimalsAssetOut = uint256(assetOut.decimals());

        uint256[] memory amounts = new uint256[](2);

        amounts[0] = amountIn;
        amounts[1] = amountIn.mul(priceAssetIn).mul(10**decimalsAssetOut).div(
            priceAssetOut.mul(10 ** decimalsAssetIn)
        );

        return amounts;
    }

    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 minAmountOut,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory) {
        minAmountOut;
        deadline;

        IERC20 assetIn = IERC20(path[0]);
        IERC20 assetOut = IERC20(path[1]);

        uint256[] memory amounts = getAmountsOut(amountIn, path);

        assetIn.transferFrom(msg.sender, address(this), amounts[0]);
        assetOut.transfer(to, amounts[1]);

        return amounts;
    }

    function swapTokensForExactTokens(
        uint256 amountOut,
        uint256 maxAmountIn,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory) {
        maxAmountIn;
        deadline;

        IERC20 assetIn = IERC20(path[0]);
        IERC20 assetOut = IERC20(path[1]);

        uint256[] memory amounts = getAmountsIn(amountOut, path);

        assetIn.transferFrom(msg.sender, address(this), amounts[0]);
        assetOut.transfer(to, amounts[1]);

        return amounts;
    }

    function rescueTokens(address[] calldata tokens, address destination) external {
        for(uint256 i = 0; i < tokens.length; i++) {
            IERC20 token = IERC20(tokens[i]);
            token.transfer(destination, token.balanceOf(address(this)));
        }
    }
}