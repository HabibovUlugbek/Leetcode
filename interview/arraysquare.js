var sortedSquares = function(nums) {
    nums = nums.map(num => num*num)
   return nums.sort((a, b) => a - b)
};

console.log(sortedSquares([-7,-3,2,3,11]))