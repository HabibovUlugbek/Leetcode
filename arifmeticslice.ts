const numberOfArithmeticSlices = (nums: number[]): number => {
  let count = 0;
  let sub_count = 0;
  for (let i = 0; i < nums.length; i++) {
    const difference_1 = nums[i] - nums[i + 1];
    const difference_2 = nums[i + 1] - nums[i + 2];
    if (difference_1 === difference_2) {
      count++;
      sub_count += count;
    } else {
      count = 0;
    }
  }

  return sub_count;
};
