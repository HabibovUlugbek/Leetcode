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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    
    
    let result =[];
    
    function recursion(root){
        result.push(root.val)
       if(root.left)recursion(root.left)
        if(root.right) recursion(root.right)
    }
    recursion(root)
    
    
   for(let i=0;i<result.length;i++){
        for(let j=i+1;j<result.length;j++){
            if(result[i]+result[j]===k){return true}
             
        }
    }
    return false
};