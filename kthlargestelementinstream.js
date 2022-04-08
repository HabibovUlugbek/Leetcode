var KthLargest = function (k, nums) {
  (this.k = k), (this.nums = nums);
};
KthLargest.prototype.add = function (val) {
  this.nums.push(val);
  return this.nums.sort((a, b) => b - a)[this.k - 1];
};
