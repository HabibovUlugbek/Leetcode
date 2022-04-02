//Time limiteeed
function subArrayRanges(nums: number[]): number {
  let range: number = 0;
  for (let i: number = 0; i <= nums.length - 2; i++) {
    for (let j: number = i + 2; j <= nums.length; j++) {
      range =
        range + Math.max(...nums.slice(i, j)) - Math.min(...nums.slice(i, j));
    }
  }
  return range;
}

function subArrayRanges(nums: number[]): number {
  let range = 0;
  for (let i = 0; i < nums.length; i++) {
    let smallest = nums[i],
      biggest = nums[i];
    for (let j = i; j < nums.length; j++) {
      smallest = Math.min(smallest, nums[j]);
      biggest = Math.max(biggest, nums[j]);
      range += biggest - smallest;
    }
  }
  return range;
}
