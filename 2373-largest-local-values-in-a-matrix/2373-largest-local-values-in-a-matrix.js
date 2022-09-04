/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const ans = [];
        
    for (let r = 0; r < grid.length - 2; r++) {
        const row = [];
        for (let c = 0; c < grid[r].length - 2; c++) {
            row.push(Math.max(
                grid[r][c], grid[r][c + 1], grid[r][c + 2],
                grid[r + 1][c], grid[r + 1][c + 1], grid[r + 1][c + 2],
                grid[r + 2][c], grid[r + 2][c + 1], grid[r + 2][c + 2]
            ));
        }
        ans.push(row);
    }

    return ans;
}