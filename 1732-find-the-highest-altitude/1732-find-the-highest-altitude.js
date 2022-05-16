/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    let arr = [0];
    
    for(let i=0;i<gain.length;i++){
        arr.push(arr[arr.length-1] + gain[i])
    }
    return Math.max(...arr);
};