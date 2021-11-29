/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let diff = Infinity;

    for(var i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1
    
        while(j < k) {
            let sum = nums[i]+nums[j]+nums[k]
        
            if(Math.abs(diff) > Math.abs(target-sum)) {
                diff = target - sum
            }
        
            if(sum < target) {
                j++
            } else {
                k--
            }
        }
    }
    return target - diff
};