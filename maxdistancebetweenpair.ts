function maxDistance(nums1: number[], nums2: number[]): number {
  let maxpair = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i; j < nums2.length; j++) {
      if (nums1[i] <= nums2[j]) {
        maxpair = Math.max(maxpair, j - i);
      }
    }
  }
  return maxpair;
}
//better solution
function maxDistance2(nums1: number[], nums2: number[]): number {
  let i = 0,
    j = 0;
  let ans = 0;
  while (i < nums1.length && j < nums2.length) {
    j = Math.max(j, i);
    while (nums1[i] <= nums2[j]) {
      ans = Math.max(ans, j - i);
      j++;
    }
    i++;
  }

  return ans;
}
