function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let min = Infinity
    let index = -1
    points.forEach(([a,b], i)=>{
        if(a===x || b===y){
            const distance = Math.abs(x-a) + Math.abs(y-b)
            if(distance<min){
                index = i
                min = distance
            }
        }
    })
    return index
};