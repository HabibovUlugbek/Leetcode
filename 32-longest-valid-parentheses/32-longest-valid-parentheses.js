/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0;
  let saved = {};

  for (let i = 0; i < s.length; i++) {
    const pairI = i - (saved[i - 1] || 0) - 1;

    if (s[i] === ')' && s[pairI] === '(') {
      saved[i] = 2 + (saved[i - 1] || 0) + (saved[pairI - 1] || 0);

      if (saved[i] > max) {
        max = saved[i];
      }
    }
  }

  return max;
};