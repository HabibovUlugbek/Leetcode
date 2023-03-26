const pruneTree = function(root) {
 root.right = root.right && pruneTree(root.right);
 root.left = root.left && pruneTree(root.left);
 if(root.val === 0 && !root.right && !root.left)
   return null
 else
   return root;
}