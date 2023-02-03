/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
      let len = 1;
  let count = 9;
  let start = 1;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  start += (n - 1) / len;
  return `${start}`.charAt((n - 1) % len) | 0;

};