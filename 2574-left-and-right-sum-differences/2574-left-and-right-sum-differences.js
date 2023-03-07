/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let len = nums.length
    let left = new Array(len).fill(0);
    let right = new Array(len).fill(0);
    for(let i=0 ;i<nums.length; i++){
        if(i-1 >= 0)  left[i] = left[i-1]+nums[i-1];
        if(i !== 0) right[len-1-i] = right[len-i]+nums[len-i];
    }    
    let result =new Array(len).fill(0)
    for(let i=0 ;i<len; i++){
       result[i] = Math.abs(right[i]-left[i])
    }
    return result;
};