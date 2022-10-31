/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(let i=0 ; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            let num = matrix[i][j];
            let k=i;
            let l=j;
            while(k < matrix.length && l< matrix[k].length){
                if(num !== matrix[k][l]) return false;
                k++;
                l++;
            }
        }
    }
    
    return true;
};