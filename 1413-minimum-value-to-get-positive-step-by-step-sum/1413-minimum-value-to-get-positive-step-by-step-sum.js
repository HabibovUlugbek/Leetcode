/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0;
    let min = Infinity;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        if(sum<1) min = Math.min(min,sum)
    }
    return min === Infinity ? 1 :min*(-1)+1;
};