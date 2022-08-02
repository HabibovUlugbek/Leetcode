/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let result = 0;
    let i=0;
    while(i<nums.length/2){
        let sum = nums[i]+nums[nums.length -1 - i];
        result = Math.max(result, sum)
        i++;
    }
    return result;
};