/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let l = 0
  let r = 0
  let min = Infinity
  let sum = 0
  while(r<nums.length){
    sum+= nums[r]
    while(sum >= target){
      let count = r-l+1
      min = Math.min(min, count)     
      sum-= nums[l++]
    } 
    r++
  }
  return min === Infinity ? 0 : min
};