var differenceOfSum = function (nums) {
  return Math.abs(nums.reduce((p, v) => p + v) - nums.join("").split("").reduce((p, v) => +p + +v));
};