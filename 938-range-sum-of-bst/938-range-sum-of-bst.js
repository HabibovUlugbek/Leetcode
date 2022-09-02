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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    function dfs(root){
        if(!root) return null
        if(root.val>= low && root.val<=high ) sum+=root.val;
        
        dfs(root.left);
        dfs(root.right)
    }
    
    dfs(root)
    return sum;
};