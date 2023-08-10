/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length < 2 ) return nums.length
    let hash = {}
    for(let i=0;i<nums.length; i++){
        if(hash[nums[i]]) continue
        else hash[nums[i]]=1
    }
    
    const values = Object.keys(hash).sort((a,b) => a-b)
    if(values.length===1) return 1
    let max = 0
    let count= 0
    
    for(let i=1; i<values.length; i++){
        if(values[i]-values[i-1] === 1){
            if(count === 0) count++
            count++
        }else {
            max= Math.max(count,max)
            count = 0
        }
    }
    max= Math.max(count,max)
    return  max === 0 ? 1 : max;
};