/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    matrix = matrix.flat().sort((a,b) => a-b);
    return matrix[k-1]
};