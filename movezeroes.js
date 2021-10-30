/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let n = nums.length;
   for (let i = 0; i < n; i++) {
     const val = nums[i];
     if (val === 0) {
       nums.push(...nums.splice(i, 1));
       i--;
       n--;
     }
   }
 };