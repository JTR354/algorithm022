/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  /*  */
  if (nums.length < 2) return nums[0] || 0
  const dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return Math.max(...dp)
};

var rob = function(nums) {
  /* dp rob current then you can't rob the pre house and then plus the before max  */
  let pre = now = 0
  for (let i of nums) {
    [pre, now] = [now, Math.max(pre + i, now)]
  }
  return now 
};
// @lc code=end

