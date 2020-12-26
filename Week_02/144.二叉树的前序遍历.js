/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    const result = []    
    preorder(root)
    return result

    function preorder(root) {
      if (!root) return
      result.push(root.val)
      preorder(root.left)
      preorder(root.right)
    }
};

var preorderTraversal = function(root) {
    const result = [], stack = []

    while(true) {
      while(root) {
        result.push(root.val)
        stack.push(root)
        root = root.left
      }
      if (!stack.length) return result
      root = stack.pop()
      root = root.right
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = preorderTraversal;
// @after-stub-for-debug-end