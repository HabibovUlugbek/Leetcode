var rotate = function(nums, k) {
    var rotatearr= []
    for (let i = 0; i < k; i++) {
       last = nums.pop()
        nums.unshift(last)
    }
    return nums;
};
console.log(rotate(
    [1,2,3,4,5,6,7], 3))