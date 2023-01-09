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
    if(!root) return [];
    const stack = [root];
    const result = [];
    
    while(stack.length) {
        let node = stack.pop();
        result.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return result
};