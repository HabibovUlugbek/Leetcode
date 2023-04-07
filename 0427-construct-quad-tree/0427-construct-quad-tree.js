var construct = function(grid) {
    function create(i, j, l) {
        if(l===1) return new Node(grid[i][j],true,null,null,null,null)
        
        let node = new Node(false,false,null,null,null,null), half=l>>1
        let tl = create(i, j, half)
        let tr = create(i, half + j, half)
        let bl = create(half + i, j, half)
        let br = create(half + i, half + j, half)
        
        if(tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf
            && tl.val===tr.val && tl.val===bl.val && tl.val===br.val
        ) node=tl
        
        if (!node.isLeaf) {
            node.topLeft = tl
            node.topRight = tr
            node.bottomLeft = bl
            node.bottomRight = br
        }
        
        return node
    }

    return create(0, 0, grid.length)
};