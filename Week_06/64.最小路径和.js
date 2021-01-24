/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length, n = grid[0].length, dp = grid
  for (let i = 0; i < m ; i++) {
    for (let j = 0; j < n ; j++) {
      if (!i && !j) continue
      if (i === 0) {
        dp[i][j] += dp[i][j - 1]
      } else if (j === 0) {
        dp[i][j] += dp[i - 1][j]
      } else {
        dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m - 1][n - 1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minPathSum;
// @after-stub-for-debug-end