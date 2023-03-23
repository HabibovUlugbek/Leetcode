var goodNodes = function(root) {
    let good = 0;
    function trav(node, max){
        if(!node) return;
        if(node.val >= max) ++good;
        max = Math.max(max, node.val);
        trav(node.left, max);
        trav(node.right, max); 
    }
    trav(root, root.val);
    return good;
    
};