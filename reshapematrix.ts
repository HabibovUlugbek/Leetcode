function matrixReshape(nums: number[][], r: number, c: number): number[][] {
  var arr = nums.flat();
  if (r * c != arr.length) return nums;

  var res = [];
  while (arr.length) res.push(arr.splice(0, c));
  return res;
}
