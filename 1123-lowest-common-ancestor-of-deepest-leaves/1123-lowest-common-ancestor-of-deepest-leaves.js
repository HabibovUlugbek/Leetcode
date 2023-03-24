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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    if(!root) return null
    let node = root ;
    let deepest = 0;
    
    function dfs(root, depth){
    deepest = Math.max(deepest, depth);
        if (!root) return depth;
        const deepestLeft = dfs(root.left, depth + 1);
        const deepestRight = dfs(root.right, depth + 1);
        if (deepestLeft === deepest && deepest === deepestRight) {
            node = root;
        }
        return Math.max(deepestLeft, deepestRight);
    }
    dfs(root,0)
    return node;
};