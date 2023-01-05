/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let prev = null, count = 0;
    
    for(let [start, end] of points) {
        console.log(prev, count)
        if(prev == null || prev < start) {
            count++;
            prev = end;
        } else prev = Math.min(prev, end);
    }
    return count;
};