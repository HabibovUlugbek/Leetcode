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
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST (root, val) {
    if(!root) return  new TreeNode(val)
    if(root.val > val){
        if(root.left) insertIntoBST(root.left , val)
        else root.left = new TreeNode(val)
    }else {
        if(root.right) insertIntoBST(root.right, val)
        else root.right = new TreeNode(val)
    }
    return root
};