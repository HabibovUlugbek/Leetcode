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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const order = [];
    const BFS = (node, depth) => {
        if (!node) return;
        if (depth === order.length) {
            order.push([]);
        }
        order[depth].push(node.val);
        BFS(node.left, depth + 1);
        BFS(node.right, depth + 1);
    }
    BFS(root, 0);
    return order;
};