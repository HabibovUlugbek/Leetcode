/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort(
    (a, b) =>
      a.toString(2).split("0").join("").length -
        b.toString(2).split("0").join("").length || a - b
  );
};
