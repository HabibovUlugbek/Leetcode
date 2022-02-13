function maxDepth(root: TreeNode | null): number {
    if(root==null) return 0;
    if(root.left==null && root.right==null) return 1;
    
    let leftSideNodes=1+maxDepth(root.left);
    let rightSideNodes=1+maxDepth(root.right);
    return Math.max(leftSideNodes,rightSideNodes)
};