/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(target < matrix[0][0] || target > matrix[matrix.length-1][matrix[0].length-1]) return false
    for(let i=0 ;i<matrix.length; i++){
        if(target<matrix[i][0] || target>matrix[i][matrix[i].length - 1]) continue;
        else return matrix[i].includes(target);
    }
    return false
};