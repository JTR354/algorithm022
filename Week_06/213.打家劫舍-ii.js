/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || nums.length < 2) return nums[0] || 0
  const p1 = helper(nums.slice(1))
  const p2 = helper(nums.slice(0, nums.length - 1))
  return Math.max(p1, p2)

  function helper(prices) {
    let pre = now = 0
    for (let i of prices) {
      [pre, now] = [now, Math.max(now, pre + i)]
    }
    return now
  }/*  */
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = rob;
// @after-stub-for-debug-end