/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isIdealPermutation = (A) => {
  for (let i = 0; i < A.length; ++i) {
    const tmp = A[i] - i;
    if (tmp > 1 || tmp < -1) return false;
  }
  return true;
};