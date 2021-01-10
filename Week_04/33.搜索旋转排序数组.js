/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  /* 二分查找法 */
  /* 部分有序,边界,索引 */
  let left = 0, right = nums.length - 1, mid = 0
  while (left <= right) {
    mid = (left + (right - left) / 2) | 0
    if (nums[mid] === target) {
      return mid
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
  
};
// @lc code=end

