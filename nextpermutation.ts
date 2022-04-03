/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let isPermutation = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      isPermutation = i - 1;
      break;
    }
  }
  if (isPermutation === -1) {
    nums.reverse();
    return;
  }
  for (let i = nums.length - 1; i > isPermutation; i--) {
    if (nums[i] > nums[isPermutation]) {
      swap(nums, i, isPermutation);
      break;
    }
  }
  for (let i = isPermutation + 1, j = nums.length - 1; i < j; i++, j--) {
    swap(nums, i, j);
  }
}

function swap(nums: number[], i: number, j: number): void {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
