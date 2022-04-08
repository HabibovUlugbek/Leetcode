function minimalKSum(nums: number[], k: number): number {
  let sum = 0;
  let num = 0;
  let result = 0;
  while (k > result) {
    num++;
    if (!nums.includes(num)) {
      sum += num;
      result++;
    }
  }
  return sum;
}
