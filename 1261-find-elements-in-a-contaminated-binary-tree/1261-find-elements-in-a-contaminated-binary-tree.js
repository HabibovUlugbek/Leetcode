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
 */
var FindElements = function(root) {
    this.tree = root
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    this.tree.val = 0;
    function find(target,root){
        if(!root) return false;
        let val = root.val
        if(val === target) return true;
        if(root.left) {
            root.left.val = 2*val +1;
            if(find(target,root.left)) return true
        }
        if(root.right) {
            root.right.val = 2*val +2;
            if(find(target,root.right))return true
        }
        return false
    }
     return find(target,this.tree)
    
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */