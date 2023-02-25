/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
   var min=Infinity
   var diff=-1
   for(i=0;i<nums.length;i++){
       min = Math.min(min,nums[i])
       diff=Math.max(diff,nums[i]-min)
   }
   return diff==0 ? -1 : diff
}