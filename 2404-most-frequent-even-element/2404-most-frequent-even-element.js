/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let hash = {};
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 === 0){
            if(hash[nums[i]]) hash[nums[i]]++
            else hash[nums[i]] = 1;
        }
    }
    let min = Infinity;
    let valueof = 0
    for (const [key, value] of Object.entries(hash)) {
        if(valueof < value) {
            min = key
            valueof = value
        } ;
        if(valueof === value ) min = Math.min(min, key)
    }
    return min === Infinity ? -1 : min;
};