/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = []
    helpPostorder(root)
    return result

    function helpPostorder(root) {
        if (!root) return
        for (let node of root.children) {
            helpPostorder(node)
        }
        result.push(root.val)
    }
};

var postorder = function(root) {
    const result = [], stack = [root]
    if (!root) return result

    while(stack.length) {
        const node = stack.pop()
        const children = node.children
        result.push(node.val)
        for (let child of children) {
            stack.push(child)
        }
    }
    
    return result.reverse()
};
// @lc code=end

