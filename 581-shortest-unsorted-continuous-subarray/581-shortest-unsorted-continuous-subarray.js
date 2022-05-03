/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let start = null;
    let arr = [...nums];
    let end = null;
    nums = nums.sort((a,b) => a-b);
    for (let i=0; i<nums.length; i++){
        if( start === null && nums[i] !== arr[i]) start =i;
        if(nums[i] !== arr[i]) end=i;
    }
    if(start === null) return 0
    return end-start+1;
};