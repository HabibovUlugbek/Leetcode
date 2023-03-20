/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let values = []
    let stack1 = []
    if(root1) stack1.push(root1)
    let stack2 = []
    if(root2) stack2.push(root2)
    while(stack1.length> 0 || stack2.length >0){
        if(stack1.length > 0){
            let curr1 = stack1.pop();
            values.push(curr1.val);
            if(curr1.left) stack1.push(curr1.left);
            if(curr1.right) stack1.push(curr1.right);
        } 
       if(stack2.length > 0) {
            let curr2 = stack2.pop();
            values.push(curr2.val);
            if(curr2.left) stack2.push(curr2.left);
            if(curr2.right) stack2.push(curr2.right);
       }
    }
    
    return values.sort((a,b) => a-b);
};