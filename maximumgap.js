/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
    nums.sort((a,b) => a-b)
    if(nums.length ===1) return 0;
    var max= 0;
    for(var i=1; i<nums.length; i++){
        if(nums[i]-nums[i-1]>max) max =nums[i]-nums[i-1]
    }
    return max;
};