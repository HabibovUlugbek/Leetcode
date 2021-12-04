/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMiddleIndex = function(nums) {
    var left =0
    var right = 0;
    if(nums.length ===1) return 0;
   for (let i = 0; i < nums.length; i++) {
       for(var j=0; j<nums.length ;j++){
           if(j<i) left=left+nums[j];
           if(j>i) right = right+nums[j]
       }
       if(left === right ) return i;
       left=0 ;
       right=0;
   }
   return -1
};