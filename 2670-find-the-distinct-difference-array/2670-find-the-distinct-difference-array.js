/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let arr = []
    for(let i=0 ; i<nums.length; i++){
        let prefix = new Set(nums.slice(0,i+1))
        let suffix = new Set(nums.slice(i+1,nums.length))
        
        let num = prefix.size - suffix.size
        arr.push(num)
    }
    return arr
};