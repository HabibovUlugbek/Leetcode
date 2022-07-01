/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    if (nums.length === 1) return nums[0].sort((a, b) => a - b)
    let result = []
    let hash= {};
    
    for(let i=0 ; i<nums.length; i++){
        let num = 0;
        nums[i] = nums[i].sort((a, b) => a - b)
        for(let j=0;j<nums[i].length; j++){
            if(num<nums[i][j]){
                if(hash[nums[i][j]]) hash[nums[i][j]]++
                else hash[nums[i][j]] = 1
                num = nums[i][j];
            }
        }
    }

    for (const key in hash) {
    if(hash[key] === nums.length) result.push(key)
    }

    return result;
};