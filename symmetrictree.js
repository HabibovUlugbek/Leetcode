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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if (root == null) return true;
    
    return sym(root.left, root.right);
};

const sym =(left, right) => {
    if (left == null && right == null) return true; 
    if (left == null || right == null) return false; 
    if (left.val !== right.val) return false; 
   
    return sym(left.left, right.right) &&
    sym(left.right, right.left)
}