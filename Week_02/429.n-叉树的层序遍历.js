/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    if (root) helpLevel(root)
    return result

    function helpLevel(node, level = 0) {
        if (!result[level]) {
            result[level] = []
        }
        result[level].push(node.val)
        for (let child of node.children) {
            helpLevel(child, level + 1)
        }
    }
};

var levelOrder = function(root) {
    const result = []
    if (!root) return result
    
    let loop = [root]
    while(loop.length) {
        const cur = []
        let next = []
        for (let node of loop) {
            cur.push(node.val)
            next = next.concat(node.children)
        }
        result.push(cur)
        loop = next
    }
    return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end