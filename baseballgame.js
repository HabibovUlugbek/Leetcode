/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let arr = [];
  for (let i = 0; i < ops.length; i++) {
    if (Number.isInteger(ops[i] * 1)) {
      arr.push(ops[i] * 1);
    } else if (ops[i] === "C") {
      console.log(arr);
      arr.pop();
    } else if (ops[i] === "D") {
      arr.push(arr[arr.length - 1] * 2);
    } else if (ops[i] === "+") {
      arr.push(arr[arr.length - 1] * 1 + arr[arr.length - 2] * 1);
    }
  }
  console.log(arr);
  return arr.reduce((prev, cur) => (prev += Number(cur)));
};
