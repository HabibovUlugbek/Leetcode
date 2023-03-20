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
var evaluateTree = function(root) {
  return root.val === 3 ? evaluateTree(root.left) && evaluateTree(root.right) :
         root.val === 2 ? evaluateTree(root.left) || evaluateTree(root.right) :
         root.val
};