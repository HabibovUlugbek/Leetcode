/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    for (var i=0 ; i< matrix.length; i++){
        if(matrix[i][0]> target || matrix[i][matrix[i].length-1] < target ) continue;
        if(matrix[i].includes(target)) return true ;
        }
    return false;
};