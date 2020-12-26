/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [], stack = []
  while (true) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    if (!stack.length) return result
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }
};

var inorderTraversal = function(root) {
  const result = []
  inorder(root)
  return result

  function inorder(root) {
    if (!root) return
    inorder(root.left)
    result.push(root.val)
    inorder(root.right)
  }
};

// @lc code=end

