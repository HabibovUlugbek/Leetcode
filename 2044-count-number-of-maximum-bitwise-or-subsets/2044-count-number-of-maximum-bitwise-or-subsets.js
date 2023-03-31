/**
 * @param {number[]} nums
 * @return {number}
 */



var countMaxOrSubsets = function(nums) {
    let res = 0;
    let max = 0;
    function backtrack(nums,start, val){   
        if(val === max)res++
        
        for(let i = start;i<nums.length; i++){
            backtrack(nums,i+1,val|nums[i])
        }
        
    }
    
    for(let num of nums) max |= num;
    backtrack(nums,0, 0)
    return res;
    
   
};