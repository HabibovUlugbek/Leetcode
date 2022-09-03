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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    const getSum = (node, sum) => {
        if (!node) return sum;
    
        node.val += getSum(node.right, sum);

        return getSum(node.left, node.val);
    };
    
    getSum(root, 0);

    return root;
};