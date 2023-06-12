/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0 ) return []
    let result = []
    let start= nums[0] 
    let end= nums[0] ;
    for(let i=1; i<nums.length; i++){
        if(end+1 !== nums[i]){
            if(end === start) result.push(`${end}`)
            else result.push(`${start}->${end}`)
            start = end = nums[i]
        }else {
            end = nums[i]
        }
    }
    if(end === start) result.push(`${end}`)
    else result.push(`${start}->${end}`)
    return result
};