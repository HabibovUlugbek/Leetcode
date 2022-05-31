function findFinalValue(nums: number[], original: number): number {
    return nums.includes(original) ?  findFinalValue(nums, original*2) : original ;
};