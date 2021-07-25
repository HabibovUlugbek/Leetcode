var fourSum = function(nums, target) {
   nums = nums.sort((a, b) => a - b)
   var arr = [];
   console.log(nums)
   for (let i = 0; i < parseInt(nums.length/2)-1; i++) {
       console.log(i)
       console.log(nums.length)
       for (let j = i+1; j < parseInt(nums.length/2); j++) {
           sumnumber = nums[i]+nums[nums.length-1-i] + nums[j]+nums[nums.length-1-j]
           if(target === sumnumber && i !== (nums.length-1-i) && j !== (nums.length-1-j)) arr.push([nums[i],nums[nums.length-1-i],nums[j],nums[nums.length-1-j]])
       }
   }
   return arr;
};

console.log(fourSum([-3,-1,0,2,4,5], 0))