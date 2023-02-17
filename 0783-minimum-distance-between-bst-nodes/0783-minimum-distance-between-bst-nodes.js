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
var minDiffInBST = function(root) {
    let arr = [];
    
    function traverse(root){
        if(!root) return 
        arr.push(root.val);
        traverse(root.left,arr)
        traverse(root.right,arr)
    }
    
    traverse(root);
    arr.sort((a,b) => a-b);
    let min = Infinity
    for(let i=0 ; i<arr.length-1; i++){
        min = Math.min(min, arr[i+1]-arr[i])
    }
    return min
};