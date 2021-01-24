/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /* 动态规划 */
  let total = 0
  for (let i = 0; i < prices.length; i++) {
    if (i > 0 && prices[i] > prices[i - 1]) {
      total += prices[i] - prices[i - 1]
    }
  }
  return total
};
// @lc code=end

