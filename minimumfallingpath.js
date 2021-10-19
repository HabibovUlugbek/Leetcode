/**
 * @param {number[][]} matrix
 * @return {number}
 */
 const minFallingPathSum = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.min(
                matrix[i - 1][j],
                matrix[i - 1][j - 1] || 101,
                matrix[i - 1][j + 1] || 101
            ) + matrix[i][j];
        }
    }
    
    return Math.min(...matrix[m - 1]);
};