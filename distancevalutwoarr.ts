function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  return arr1.filter((n1) => arr2.every((n2) => Math.abs(n1 - n2) > d)).length;
}
