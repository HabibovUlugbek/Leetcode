/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    nums = nums.sort((a,b) => a-b)
    var arr =[];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target) arr.push(i)
    }
    return arr;
};