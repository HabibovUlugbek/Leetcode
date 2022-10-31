/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(let i=1 ; i<matrix.length; i++){
        for(let j=1; j<matrix[i].length; j++){
            if(matrix[i-1][j-1] !== matrix[i][j]) return false;
        }
    }
    
    return true;
};