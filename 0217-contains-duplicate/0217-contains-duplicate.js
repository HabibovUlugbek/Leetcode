/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = new Map()
    for(let i=0 ; i<nums.length; i++){
        if(hash.has(nums[i]))return true 
        else hash.set(nums[i], 1)
    }
    return false
};