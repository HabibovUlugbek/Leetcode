/**
 * @param {number[]} nums
 * @return {number}
 */
const countDistinctIntegers = nums => {
  const unique = new Set();
  for (const n of nums) {
    unique.add(n);
    let reversed = 0;
    for (let m = n; m > 0; m = Math.floor(m / 10)) {
      const lastDigit = m % 10;
      reversed *= 10;
      reversed += lastDigit;
    }
    unique.add(reversed);
  }
  return unique.size;
};