/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let recur = function(lower, upper) {
        if (preorder[0] < lower || preorder[0] > upper) return null;
        if (preorder.length == 0) return null;
        let root = new TreeNode(preorder.shift());
        root.left = recur(lower, root.val);
        root.right = recur(root.val, upper);
        return root;
    }
    return recur(-Infinity, Infinity);
};