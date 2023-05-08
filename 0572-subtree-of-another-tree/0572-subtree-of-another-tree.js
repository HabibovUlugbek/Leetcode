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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return false;
    return helper(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
    function helper(root, subRoot){
        if(!root && !subRoot) return true;
        if(!root || !subRoot || root.val != subRoot.val){
            return false;
        }
        let left = helper(root.left, subRoot.left);
        let right = helper(root.right, subRoot.right);
        return left && right;
    }