function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) return i;
  }
  return nums[nums.length - 1] + 1;
}
