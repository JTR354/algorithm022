/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = []
    helpPreorder(root)
    return result

    function helpPreorder(root) {
        if (!root) return
        result.push(root.val)
        for (let node of root.children) {
            helpPreorder(node)
        }
    }
};

var preorder = function(root) {
    const result = [], stack = [root]
    if (!root) return result
    
    while(stack.length) {
        const node = stack.pop()
        const children = node.children
        result.push(node.val)
        for (let i = children.length - 1; i > -1; i--) {
            stack.push(children[i])
        }
    }

    return result
};
// @lc code=end

