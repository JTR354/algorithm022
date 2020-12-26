/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}, len = nums.length
    for (let i = 0; i < len; i++) {
        const cur = nums[i]
        if (map[cur] != null) {
          return [i, map[cur]]
        }
        map[target - cur] = i
    }
    return []
};
// @lc code=end

