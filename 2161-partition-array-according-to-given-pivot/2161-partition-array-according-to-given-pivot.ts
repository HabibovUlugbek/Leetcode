function pivotArray(nums: number[], pivot: number): number[] {
return [...nums.filter(el => el < pivot), ...nums.filter(el => el === pivot), ...nums.filter(el => el > pivot)]
};