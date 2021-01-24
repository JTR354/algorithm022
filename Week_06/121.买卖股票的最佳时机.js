/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minprice = Number.MAX_SAFE_INTEGER
  let maxprofit = 0
  for (let p of prices) {
    if (p < minprice) {
      minprice = p
    } else if (p - minprice > maxprofit) {
      maxprofit = p - minprice
    } 
  }
  return maxprofit
};

var maxProfit = function(prices) {
  let maxCur = maxSoFar = 0
  for (let i = 1 ; i < prices.length; i++) {
    maxCur = Math.max(0, maxCur += prices[i] - prices[i - 1])
    maxSoFar = Math.max(maxCur, maxSoFar)
  }
  return maxSoFar
};
// @lc code=end
