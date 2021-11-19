/**
 * @param {number} n
 * @return {boolean}
 */
 var checkPowersOfThree = function (n) {
    while (n > 0) {
      if (n % 3 === 0) {
        n /= 3;
        continue;
      }
      n -= 1;
      if (n % 3 !== 0) {
        return false;
      }
    }
    return true;
  };