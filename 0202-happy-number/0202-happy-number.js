/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n, dp = []) => {
  if (n === 1) return true;
  if (dp.includes(n)) return false;
  dp.push(n);
  let res = n
    .toString()
    .split("")
    .reduce((acc, el) => (acc += Math.pow(el, 2)), 0);
  return isHappy(res, dp);
};