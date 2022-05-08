/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length
    const except = n * (n + 1) / 2  
    
    const set = new Set(nums) 
    let setSum = 0
    set.forEach(val => setSum+=val) 
    
    const numSum = nums.reduce((curr,acc) => curr + acc) 
    
    return [numSum - setSum, except - setSum]
};