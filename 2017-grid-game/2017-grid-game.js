/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    let len = grid[0].length;
    let preRow1= [...grid[0]]
    let preRow2 = [...grid[1]]
    
    for(let i=1 ; i<len; i++){
        preRow1[i]+=preRow1[i-1];
        preRow2[i]+=preRow2[i-1];
    }
    let res = Infinity;
    
    for(let i=0 ; i< len; i++){
       let top = preRow1[len-1]- preRow1[i];
       let bottom = i > 0 ? preRow2[i-1] : 0;
       let second =  Math.max(top,bottom)
       res = Math.min(second,res)
    }
    
    return res;
};