/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let count = 0;
  for (let log of logs) {
    count += log == "../" ? (count <= 0 ? 0 : -1) : log == "./" ? 0 : 1;
  }
  return count;
};
