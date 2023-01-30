/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let result = Math.max(...nums)-Math.min(...nums);
    if(result > 2*k ) return (result-2*k)
    return 0;
};