function minTimeToVisitAllPoints(points: number[][]): number {
let count = 0;
    for(let i=0 ;i<points.length-1; i++){
        count = count + Math.max(Math.abs(points[i][0]-points[i+1][0]),Math.abs(points[i][1]-points[i+1][1]));
    }
    
    return count;
};