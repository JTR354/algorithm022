/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

  let count = 0, n = grid.length, m = grid[0].length
  if (!n) return 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        count++
      }
    }
  }
  return count

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') {
      return
    }
    grid[i][j] = '0'
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
};
// @lc code=end

