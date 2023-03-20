/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(times, duration) {
    let total = 0;
    for(let i=0; i<times.length-1; i++){
        if(times[i]+duration < times[i+1])total+=duration
        else total+= times[i+1]-times[i];
    }
    
    return total+duration;
};