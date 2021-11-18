/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestSubarray = function(nums) {
    var first=0 , second=0, max=0;
    var zero=0;
    for(var i=0 ; i<nums.length; i++){
        if(nums[i]===1)second++
        if(nums[i] ===0) {zero++;
        first= second ;
            second =0;
        }
        if(max< first+second) max= first+second;
    }
    if(zero ===0) max= max-1
    return max;
};