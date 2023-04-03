/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const hash = {}
    for(let i=0 ; i< nums.length; i++){
        if(hash[nums[i]])hash[nums[i]]++
        else hash[nums[i]] = 1;
    }
    let len = Math.max(...Object.values(hash))
    let res =[]
    for(let i=0;i<len;i++){
            res.push([])
        }
    for(let [key, value] of Object.entries(hash)){
        for(let i=0;i<value;i++){
            res[i].push(key)
        }
    }
    return res;
};