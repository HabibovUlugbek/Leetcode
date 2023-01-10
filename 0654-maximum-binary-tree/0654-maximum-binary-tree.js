/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = (nums, low = 0, high = nums.length - 1) => {
    if (low > high) return null
    let i = low
    for (let j = low + 1; j <= high; j++) {
        if (nums[j] > nums[i]) i = j
    }
    const root = new TreeNode(nums[i])
    root.left = constructMaximumBinaryTree(nums, low, i - 1)
    root.right = constructMaximumBinaryTree(nums, i + 1, high)
    return root
};