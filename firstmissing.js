var firstMissingPositive = function(nums) {
    for(let i = 1, set = new Set(nums); true; i++) if(!set.has(i)) return i;
};