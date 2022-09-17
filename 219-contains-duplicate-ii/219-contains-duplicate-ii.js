/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {}
    for(let i=0 ; i<nums.length; i++){
        if(hash[nums[i]] !== undefined) {
            if(Math.abs(hash[nums[i]] - i) <= k) return true;
            else hash[nums[i]] = i
        }else hash[nums[i]] = i
    }
    console.log(hash)
    return false
};