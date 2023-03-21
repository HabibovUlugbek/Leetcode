var solve = function(n,dp) {
    
    if(n % 2 === 0) return dp[n] = []
    
    if(dp[n] !== -1) return dp[n]
    
    if(n === 1) return dp[n] = [new TreeNode(0)]
    
    let ans = []
    
    n = n - 1
    
    for(let ctr = 1 ; ctr < n ; ctr ++) {
        
        let left = solve(ctr,dp)
        let right= solve(n-ctr,dp)
        
        for(let row = 0 ; row < left.length ; row ++)
            for(let col = 0 ; col < right.length ; col ++) {
                
                const node = new TreeNode(0)
                
                node.left = left[row]
                node.right= right[col]
                
                ans.push(node)
                
            }
    }
    
    return dp[n] = ans
    
}

var allPossibleFBT = function(n) {
    let dp = new Array(n+1).fill(-1)
    return solve(n,dp);
};
