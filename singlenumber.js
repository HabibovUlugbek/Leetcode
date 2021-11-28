/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    for(var i=0; i<nums.length;i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
    }
    return nums[0];
};

function singleNumber(nums) {
    const map = {};
    for (let n of nums) {
      if (map[n] == null) map[n] = 0;
      map[n]++;
    }
  
    for (let n in map) {
      if (map[n] === 1) return Number(n);
    }
  }