/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
 var numOfPairs = function(nums, target) {
    var  k=0;
    for(var i= 0; i<nums.length ; i++){
        for(var j= 0; j<nums.length ; j++){
            if(nums[i]+nums[j] == target && i!= j) k++
        }
    }
    return k;
};