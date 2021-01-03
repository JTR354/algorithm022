/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // terminator
    if (!root || root === p || root === q) return root
    // porcess logic
    // drill down
    const left = lowestCommonAncestor(root.left, p, q), right = lowestCommonAncestor(root.right, p, q)
    return (left && right) ? root : (left || right)
    // reverse
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lowestCommonAncestor;
// @after-stub-for-debug-end