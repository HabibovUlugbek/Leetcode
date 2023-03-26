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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let ans = [];
    let queue = [root];
    let childs = [];
    let sum = 0
    let count = 0
    while(queue.length > 0){
        let curr = queue.shift()
        sum+=curr.val;
        count++;
        if(curr.left) childs.push(curr.left)
        if(curr.right) childs.push(curr.right)
        if(queue.length === 0){
            queue.push(...childs)
            childs = []
            ans.push(sum/count)
            count = 0
            sum=0
        }
    }
    return ans
};