/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxDistance = function (grid) { 
    let queue = []
    let containsZero = false
    for (let row = 0; row<grid.length; row++) {
        for (let column = 0; column<grid[0].length; column++) {
            if (grid[row][column] === 1) {
                queue.push([row,column,0])
            } else {
                containsZero = true
            }
        }
    }
    if (queue.length === 0 || !containsZero) {
        return -1
    }
    
    let maxDis  = -1
    let direction = [[0,1], [0,-1], [1,0], [-1,0]]
    while (queue.length > 0) {
        let cell = queue.shift()
        maxDis = Math.max(maxDis, cell[2])
        for (let i = 0; i<direction.length; i++) {
            let x = direction[i][0] + cell[0]
            let y = direction[i][1] + cell[1]
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 0) {
                queue.push([x, y, cell[2] + 1]);
                grid[x][y] = 1;
            }
        }
    }
    return maxDis
}