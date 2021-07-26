var sortedSquares = function(nums) {
    return nums.map(num => num*num).sort((a, b) => a - b)
};

console.log(sortedSquares([-7,-3,2,3,11]))