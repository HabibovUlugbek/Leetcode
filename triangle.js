var minimumTotal = function(triangle) {
    
    for(let r = triangle.length-2; r >= 0; r--) {
        for(let c = 0; c < triangle[r].length; c++) {
            triangle[r][c] += Math.min(triangle[r+1][c], triangle[r+1][c+1]);
        }
    }
    return triangle[0][0];
};