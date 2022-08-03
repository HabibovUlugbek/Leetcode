/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    if(nums.length<2) return 0;
    let count = 0;
        for(let i=1; i<nums.length; i++){
            if(nums[i]<nums[i-1]+1){
                count+=nums[i-1]+1 - nums[i];
                nums[i] = nums[i-1] + 1
            }
        }
    return count ;
};