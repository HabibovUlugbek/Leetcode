var rob = function(nums) {
    return nums.reduce((acc, cur) => [acc[1], Math.max(acc[1], acc[0] + cur)], [0, 0])[1];
};