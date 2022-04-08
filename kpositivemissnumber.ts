function findKthPositive(arr: number[], k: number): number {
  let num = 0;
  let result = 0;
  while (k > result) {
    num++;
    if (!arr.includes(num)) result++;
  }
  return num;
}
