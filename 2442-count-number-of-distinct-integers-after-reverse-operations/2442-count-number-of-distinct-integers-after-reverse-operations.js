/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let hash = {};
    for(let i=0 ; i< nums.length; i++){
        if(!hash[nums[i]]) {
            hash[nums[i]] = true;
        }
        let num = parseInt(nums[i].toString().split("").reverse().join(""));
        if(!hash[num]) {
            hash[num] = true;
        }
    }
    
    return  Object.keys(hash).length
};