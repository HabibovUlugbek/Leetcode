/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let max = 0
    for(let i=0 ; i<n;i++){
        for(let j=0 ; j<m;j++){
            max = Math.max(max,sum(i,j))
        }
    }
    
    return max
    
    function sum(i,j){
        if(i+2>=n || j+2>= m) return 0
      return grid[i][j]+grid[i][j+1]+grid[i][j+2]+grid[i+1][j+1]+grid[i+2][j]+grid[i+2][j+1] +grid[i+2][j+2]
    }
    
};