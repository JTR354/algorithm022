/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  /* 贪心算法 */
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let child = 0
  for (let cookie = 0; cookie < g.length || cookie < s.length; cookie++) {
    if (s[cookie] >= g[child]) child++
  }
  return child
};
// @lc code=end
// [7,8,9,10]
// [5,6,7,8]

// @after-stub-for-debug-begin
module.exports = findContentChildren;
// @after-stub-for-debug-end