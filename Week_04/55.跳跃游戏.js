/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  /* 贪心 */
  if (!nums.length) return false
  let enableRech = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= enableRech) {
      enableRech = i
    }
  }
  return enableRech === 0
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canJump;
// @after-stub-for-debug-end