/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if (n < 1) return []
    const res = []
    const cols = new Set(), pie = new Set(), na = new Set()
    findQ(0, n, [])
    return generatePan(n)

    function findQ(row, n, bingo) {
      // terminator
      if (row >= n) {
        res.push(bingo)
        return
      }
      for (let col = 0; col < n; col++) {
        // porcess logic
        if (cols.has(col) || pie.has(row + col) || na.has(row - col))
          continue
        cols.add(col)
        pie.add(row + col)
        na.add(row - col)
        // drill down
        findQ(row + 1, n, bingo.concat(col))
        // reverse
        cols.delete(col)
        pie.delete(row + col)
        na.delete(row - col)
      }
    }

    function generatePan(n) {
      return res.map((pan) => pan.map((i) => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1) ))
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end