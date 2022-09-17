/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = Array.from(new Set(nums));
    return !(set.length === nums.length)
};