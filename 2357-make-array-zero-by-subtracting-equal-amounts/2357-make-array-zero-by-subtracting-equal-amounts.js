/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let set = new Set(nums);
    return nums.includes(0) ? set.size -1 :set.size
};