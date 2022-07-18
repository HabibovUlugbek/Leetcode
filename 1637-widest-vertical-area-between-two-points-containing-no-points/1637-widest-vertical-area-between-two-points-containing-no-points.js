/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b) => a[0] - b[0]);
    let max = 0;
    for(let i=0; i<points.length-1; i++){
        max = Math.max(max , points[i+1][0 ] - points[i][0]);
    }
    return max;
};
