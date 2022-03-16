function nextGreaterElements(nums: number[]): number[] {
  let result: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    let num: number =
      nums.slice(i).find((el) => el > nums[i]) ??
      nums.find((el) => el > nums[i]) ??
      -1;
    result.push(num);
  }
  return result;
}
