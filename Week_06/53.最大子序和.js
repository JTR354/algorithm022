/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  /* 当前的数值，如比之前累加之和都要大的话，就被当前取代 */
  /* 启发：一粒老鼠屎可能坏了一锅粥; 实力强大的话,可以取代之前的积累,比如说技术创新突破瓶颈则开启新时代 */
  const dp = [0]
  for (let n of nums) {
    const top = dp[dp.length - 1]
    dp.push(Math.max(n, n + top))
  }
  dp.shift()
  return Math.max.apply(null, dp)
};

var maxSubArray = function(nums) {
  /* 当前的数值，如比之前累加之和都要大的话，就被当前取代 */
  /* 启发：一粒老鼠屎可能坏了一锅粥; 实力强大的话,可以取代之前的积累,比如说技术创新突破瓶颈则开启新时代 */
  let max = nums[0], top = 0
  for (let n of nums) {
    top = Math.max(n, top + n)
    max = Math.max(top, max)
  }
  return max
};
// @lc code=end