/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    for (var i=0 ; i< matrix.length; i++){
        if(matrix[i].includes(target)) return true ;
        }
    return false;
    }