/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    const result = []
    postorder(root)
    return result

    function postorder(root) {
      if (!root) return
      postorder(root.left)
      postorder(root.right)
      result.push(root.val)
    }
};

var postorderTraversal = function(root) {
  const result = [], stack = []
  
  while(true) {
    while(root) {
      result.push(root.val)
      stack.push(root)
      root = root.right
    }
    if (!stack.length) break
    root = stack.pop()
    root = root.left
  }
  
  return result.reverse()
};


var postorderTraversal = function(root) {
  const result = [], stack = []
  let prev = null
  
  while(true) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    if (!stack.length) break
    root = stack.pop()
    if (root.right == null || root.right == prev) {
      result.push(root.val)
      prev = root
      root = null
    } else {
      stack.push(root)
      root = root.right
    }
  }
  
  return result
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = postorderTraversal;
// @after-stub-for-debug-end