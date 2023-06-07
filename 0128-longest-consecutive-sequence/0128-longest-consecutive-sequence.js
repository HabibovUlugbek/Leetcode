/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    let count = 0;
    let hash = {}
    for(let i=0;i<nums.length ;i++){
         if(hash[nums[i]])hash[nums[i]]++
         else hash[nums[i]]=1;
    }
    let values = Object.keys(hash).sort((a,b) => a-b)
    if(values.length <2) return values.length
    for(let i=0;i<values.length-1 ;i++){
        if(values[i+1]-values[i] === 1) {
            if(count === 0) count++
            count++;
        }
        else {
            max = Math.max(count,max)            
            count = 0
        }
    }
    max = Math.max(count,max) 
    return max === 0 ? 1 : max
};