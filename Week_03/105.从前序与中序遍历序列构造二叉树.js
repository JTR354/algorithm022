/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // terminator
    if (!inorder.length) return null
    // process
    const val = preorder[0]
    const i = inorder.indexOf(val)
    const root = new TreeNode(val)
    // dirll down
    root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
    root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))
    return root
    // reverse
};

var buildTree = function(preorder, inorder) {
  pre = i = 0
  build = function(stop) {
      if (inorder[i] != stop) {
          var root = new TreeNode(preorder[pre++])
          root.left = build(root.val)
          i++
          root.right = build(stop)
          return root
      }
      return null
  }
  return build()
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end