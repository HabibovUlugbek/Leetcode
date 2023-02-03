/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0
    let nums = String(num).split("");
    for(let i=0 ; i<nums.length; i++){
        if(num%nums[i] === 0)count++
    }
    
    return count
};