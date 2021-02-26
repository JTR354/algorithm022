/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const opt = new Array(m).fill(1).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    opt[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    opt[0][j] = 1
  }
  for(let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      opt[i][j] = opt[i - 1][j] + opt[i][j - 1]
    }
  }
  return opt[m - 1][n - 1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = uniquePaths;
// @after-stub-for-debug-end