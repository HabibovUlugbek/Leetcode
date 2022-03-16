function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];
  for (let i: number = 0; i < nums1.length; i++) {
    let index: number = nums2.indexOf(nums1[i]);
    let num: number = nums2.slice(index).find((el) => el > nums1[i]) ?? -1;
    result.push(num);
  }
  return result;
}
