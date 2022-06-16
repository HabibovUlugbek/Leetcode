/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {    
    let rows = new Array(grid.length).fill(0)
    let cols = new Array(grid[0].length).fill(0)
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            rows[i] = Math.max(rows[i], grid[i][j])
            cols[j] = Math.max(cols[j], grid[i][j])
        }
    }
    
    let inc = 0
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            inc += Math.min(rows[i], cols[j]) - grid[i][j]
        }
    }
    
    return inc
};