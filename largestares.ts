function largestTriangleArea(points: number[][]): number {
    const n:number = points.length;
    let maxArea:number = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const area:number = calcArea(points[i], points[j], points[k]);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};


function calcArea(coordA:number[], coordB:number[], coordC:number[]){
    const [xCoordA, yCoordA] = coordA;
    const [xCoordB, yCoordB] = coordB;
    const [xCoordC, yCoordC] = coordC;
    
    const sideA = xCoordA * (yCoordB - yCoordC);
    const sideB = xCoordB * (yCoordC - yCoordA);
    const sideC = xCoordC * (yCoordA - yCoordB);
    
    return Math.abs((sideA + sideB + sideC) / 2);
}