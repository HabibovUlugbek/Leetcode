var searchInsert = function(nums, target) {
    nums.push(target);
    nums.sort(function(a, b){return a - b});
    console.log(nums)
    return nums.indexOf(target);
};

console.log(searchInsert([1,3,5,6],5)