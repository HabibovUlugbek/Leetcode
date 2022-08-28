/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    for(let i=0 ; i<grid.length; i++){
        if(grid[i][0] === 0){
            for(let j=0 ; j<grid[i].length ; j++){
                grid[i][j] = grid[i][j] ? 0 :1;
            }
        }
    }
    
    for(let i=0; i<grid[0].length; i++){
        let count = 0;
        for(let j=0; j<grid.length; j++){
            if(grid[j][i] === 0) count++
        }
        if(count > Math.floor(grid.length/2)){
            for(let j=0; j<grid.length; j++){
                grid[j][i] = grid[j][i] ? 0 :1;
            }
        }
    }
    let sum = 0; 
     for(let i=0 ; i<grid.length; i++){
         sum +=parseInt(grid[i].join(""),2) 
     }
    
    
    return sum;
};