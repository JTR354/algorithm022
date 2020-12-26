/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
/* 
  1. 暴力 O(NlogN)
  2. hash O(N)
*/
  if (s.length !== t.length) return false
  const alphbet = new Array(26).fill(0)
  const base = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) {
    alphbet[s.charCodeAt(i) - base]++
    alphbet[t.charCodeAt(i) - base]--
  }
  for (let i = 0; i < alphbet.length; i++) {
    if (alphbet[i] !== 0) {
      return false
    }
  }
  return true
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end