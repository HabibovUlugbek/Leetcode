/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let max = Math.max(...nums)
    return (max+max+k-1)/2 *k;
    // return sum
};