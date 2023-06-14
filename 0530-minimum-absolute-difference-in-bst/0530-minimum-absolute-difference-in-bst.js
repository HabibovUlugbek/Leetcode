const getMinimumDifference = function(root) {
    if(!root) return 0
    let min = Infinity, vals = {}
    const dfs = (root) => {
        if(root.left){
            min = Math.min(root.val - root.left.val, min)
            dfs(root.left)
        }
        if(root.right){
            min = Math.min(root.right.val - root.val, min)
            dfs(root.right)
        }
        vals[root.val] = true
    }
    dfs(root)
    vals = Object.keys(vals).map((key) => Number(key))
    for(i = 0; i < vals.length - 1; i++){
        let diff = vals[i+1] - vals[i]
        min = Math.min(min,diff)
    }
    return min
}