/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]) return nums[i+1];
    }
    return nums[0];
};