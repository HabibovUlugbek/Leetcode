/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    const output = [];
    const hashMap = {};
    
    function combinations(comb, start) {
        let key = comb.sort().toString();
        if(!hashMap[key]) {
            output.push(comb);
            hashMap[key] = 1;
        }
        for(let i=start;i<nums.length;i++) {
            combinations([...comb, nums[i]], i+1);

        }
    }
    
    combinations([], 0);
    return output;
};