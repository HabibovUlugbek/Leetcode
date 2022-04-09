function specialArray(nums: number[]): number {
  for (let x = nums.length; x >= 0; x--) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= x) {
        count++;
      }
    }
    if (x === count) {
      return x;
    }
  }
  return -1;
}
