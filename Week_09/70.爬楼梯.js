/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let f1 = f2 = f3 = 1
    for (let i = 2; i <= n; i++) {
      f3 = f1 + f2
      f1 = f2
      f2 = f3
    }
    return f3
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = climbStairs;
// @after-stub-for-debug-end