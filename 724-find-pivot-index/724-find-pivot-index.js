/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((prev,curr) => prev+=curr);
    let left=0;
    let right = sum;
    for(let i=0;i <nums.length;i++){
        right -=nums[i];
        if(right ===left ) return i;
        left+=nums[i];
    }
    return -1;
};