/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let count = 0;
    let i=0;
    while(i<nums.length){
        if(nums[i+1] === nums[i]) {
           nums.splice(i,2);
            count++;
           }else i++;
    }
    return [count, nums.length]
};