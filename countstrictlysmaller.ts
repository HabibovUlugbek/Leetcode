function countElements(nums: number[]): number {
  let count: number = 0;
  var countElements = function (nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    nums.forEach((ele) => {
      if (ele < max && ele > min) count++;
    });
  };
  return count;
}
