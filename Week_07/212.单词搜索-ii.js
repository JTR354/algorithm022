/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let result = [], dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  let trie = buildTrie(words)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(trie, i, j)
    }
  }
  return result

  function buildTrie(words) {
    const root = {}
    for (word of words) {
      let node = root
      for (let c of word) {
        node[c] = node[c] || {}
        node = node[c]
      }
      node.word = word
    }
    return root
  }

  function search(node, x, y) {
    if (node.word != null) {
      result.push(node.word)
      node.word = null
    }
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) return
    if (!node[board[x][y]]) return

    const c = board[x][y]
    board[x][y] = Symbol('#')
    for (let [dx, dy] of dirs) {
      search(node[c], x + dx, y + dy)
    }
    board[x][y] = c
  }
};
// @lc code=end

