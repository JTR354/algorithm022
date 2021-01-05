/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  /* 
    bfs
  */
  const result = [], queue = [root]
  while(queue.length) {
    const n = queue.length, level = []
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      if (!node) continue
      level.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    level.length && result.push(level)
  }
  return result
};

var levelOrder = function(root) {
  /* 
    dfs recursion
  */
  const result = [], visited = new Set()
  dfs(0, root)
  return result

  function dfs(level, root) {
    if (!root || visited.has(root)) {
      return
    }
    if (!result[level]) {
      result[level] = []
    }
    result[level].push(root.val)
    visited.add(root)
    dfs(level + 1, root.left)
    dfs(level + 1, root.right)
  }
};

// @lc code=end

