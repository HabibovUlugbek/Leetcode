/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let hash = {};
    for(let i=0 ; i<nums.length; i++){
         if(hash[nums[i]]) hash[nums[i]]++
        else hash[nums[i]] = 1
    }
    let values = Object.entries(hash);
    values.sort((a,b) => a[1]-b[1] || b[0]-a[0]);
    let arr = [];
    for(let i=0 ; i<values.length ; i++){
        for(let j=0; j<values[i][1]; j++){
            arr.push(Number(values[i][0]))
        }
    }
    return arr;
};