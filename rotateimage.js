/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    var len =matrix.length;
  for(var i=0;i<len;i++){
      for(var j=i+1;j<len;j++){
          var temp = matrix[i][j]
          matrix[i][j] = matrix[j][i]
          matrix[j][i] = temp
      }
  }
  for(var i=0;i<matrix.length;i++){
      matrix[i].reverse()
  }  
}; 