/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {}
  for (let str of strs) {
    const key = getKey(str)
    if (!map[key]) {
      map[key] = []
    }
    map[key].push(str)
  }
  return Object.values(map)

  function getKey(str) {
    return Array.from(str).sort().join('')
  }

  function getKey(str) {
    const alphbet = new Array(26).fill(0)
    const alphbetBase = 'a'.charCodeAt(0)
    for (let i = 0; i < str.length; i++) {
      alphbet[str.charCodeAt(i) - alphbetBase]++
    }
    return alphbet.toString()
  }
};
// @lc code=end

