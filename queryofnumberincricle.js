/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let res = [];
    for(let i=0; i<queries.length; i++){
        let count =0;
        for(let j=0 ;j<points.length ; j++){
            if(Math.pow((points[j][0]-queries[i][0]),2) + Math.pow((points[j][1]-queries[i][1]),2) <= Math.pow(queries[i][2],2)) count++
        }
            res.push(count);
    }
    return res;
};
