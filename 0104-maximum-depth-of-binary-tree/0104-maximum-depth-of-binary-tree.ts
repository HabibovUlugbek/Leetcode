/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    if(root==null) return 0;
    if(root.left==null && root.right==null) return 1;
    
    let leftSideNodes=1+maxDepth(root.left);
    let rightSideNodes=1+maxDepth(root.right);
    return Math.max(leftSideNodes,rightSideNodes)
};