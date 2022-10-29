/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let arr = [...nums];
    for(let i=0 ; i< nums.length; i++){
        let num = parseInt(nums[i].toString().split("").reverse().join(""))
        arr.push(num);
    }
    return  Array.from(new Set(arr)).length
};