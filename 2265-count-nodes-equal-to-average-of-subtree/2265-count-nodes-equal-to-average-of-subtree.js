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
    
    const [sum,count] = dfs(root, 0)    
    
    return count;
};

const dfs = (root, count) => {
    if(!root) return null;
    const left = dfs(root.left,0);
    const right = dfs(root.right,0)
    let sum = root.val;
    let n = 1
    if(left){
        sum +=left[0]
        n+=left[2];
        count += left[1]  
    }
    if(right){
        sum+=right[0]
        n+=right[2];
        count += right[1]
    }
    if(Math.floor(sum/n) === root.val) {
        count++
    }
    return [sum,count, n]
    
} 