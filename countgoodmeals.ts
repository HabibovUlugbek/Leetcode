function countPairs(deliciousness: number[]): number {
  let count = 0;
  for (let i = 0; i < deliciousness.length - 1; i++) {
    for (let j = i + 1; j < deliciousness.length; j++) {
      if (isPowerOfTwo(deliciousness[i] + deliciousness[j])) count++;
    }
  }
  return count;
}

var isPowerOfTwo = function (n) {
  while (n >= 2) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  if (n == 1) return true;
  return false;
};
