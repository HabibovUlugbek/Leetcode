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
var averageOfSubtree = function(root) {
    let count = 0;
    function dfs(node){
        if(node == null) {
            return [0,0]
        } 
        let left = dfs(node.left);
        let right = dfs(node.right);
        let [lsum,lnum]=left
        let [rsum,rnum] = right;
        let sum = lsum+rsum+ node.val;
        let num = lnum + rnum+1;
        let avg = Math.floor(sum/num);
        if(avg == node.val) count++;
        return [sum,num]
    }
    dfs(root);
    return count;
};