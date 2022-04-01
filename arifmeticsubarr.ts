const checkArithmeticSubarrays = (
  nums: number[],
  l: number[],
  r: number[]
): boolean[] =>
  l.map((start, mapIdx) =>
    nums
      .slice(start, r[mapIdx] + 1)
      .sort((a, b) => a - b)
      .every((n, everyIdx, arr, diff = arr[1] - arr[0]) =>
        everyIdx < 2 ? true : n - arr[everyIdx - 1] === diff
      )
  );
