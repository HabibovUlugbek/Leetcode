/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.reduce((curr, prev) => prev+=curr);
    let sumfull = nums.length *(nums.length+1)/2;
    return sumfull - sum;
};