/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    return mat
        .map((row, i) => row
             .map((_, j) => mat.slice(i - K < 0 ? 0 : i - K, i + K + 1)
                  .reduce((acc, cur) => cur.slice(j - K < 0 ? 0 : j - K, j + K + 1).reduce((a, c) => a + c, 0) + acc, 0)))
};