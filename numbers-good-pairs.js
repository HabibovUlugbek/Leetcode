var numIdenticalPairs = function(nums) {
    var pairs = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]; console.log(pairs)
        for (let j = i+1; j < nums.length; j++) {
            const num = nums[j];
            element === num ? pairs++ : pairs;
        }
    }
    return pairs;
};

console.log(numIdenticalPairs([1,3,4,6,23,545,1,4,3]))