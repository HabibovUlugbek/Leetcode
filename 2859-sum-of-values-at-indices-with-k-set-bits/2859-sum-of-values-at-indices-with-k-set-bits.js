/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    
    for(let i = 0; i<nums.length; i++){
        const binary =i.toString(2).split("").reduce((prev, curr) => prev = Number(prev) + Number(curr))
        
        if(binary == k) sum+=nums[i]
    }
    
    return sum;
};