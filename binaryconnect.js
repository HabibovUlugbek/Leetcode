var connect = function(root, rightNode = null) {
    if (!root) return root;
    
    root.next = rightNode;
    connect(root.left, root.right);
    connect(root.right, rightNode ? rightNode.left : null);
    
    return root;
};