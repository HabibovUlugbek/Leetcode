/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let left = new Array(nums.length).fill(0);
    for(let i=1 ;i<nums.length; i++){
        left[i] = left[i-1]+nums[i-1];
    }
    
    let right = new Array(nums.length).fill(0);
    for(let i=nums.length-1 ;i>=0; i--){
        if(i === nums.length -1) {
            right[i]=0
            continue;
        }
        right[i] = right[i+1]+nums[i+1];
    }
    let result =new Array(nums.length).fill(0)
    for(let i=0 ;i<nums.length; i++){
       result[i] = Math.abs(right[i]-left[i])
    }
    return result;
};