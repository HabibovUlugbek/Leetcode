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
 * @return {number}
 */
var longestZigZag = function(root) {
   return dfs(root,null,0)
};

function dfs(root,direct,count){
    if(!root) return count
    let left = 0;
    let right = 0;
    if(root.left) {
        if(direct === "right") left = dfs(root.left, "left", count+1)
        else left = dfs(root.left, "left", 1)
    }
    if(root.right) {
        if(direct === "left") right = dfs(root.right, "right", count+1)
        else right = dfs(root.right, "right", 1)
    }
    return Math.max(left, right, count)
}