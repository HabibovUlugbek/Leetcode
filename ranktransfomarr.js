/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function (arr) {
    var sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
    return arr.map((x) => sorted.indexOf(x) + 1);
  };