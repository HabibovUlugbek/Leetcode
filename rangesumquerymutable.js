class NumArray {
  constructor(nums) {
    this.nums = new Int8Array(nums);
    this.bit = new Int32Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; ++i) {
      this.insert(i + 1, nums[i]);
    }
  }

  insert(i, diff) {
    while (i < this.bit.length) {
      this.bit[i] += diff;
      i += i & -i;
    }
  }

  update(i, val) {
    this.insert(i + 1, val - this.nums[i]);
    this.nums[i] = val;
  }

  runningSum(i) {
    let sum = 0;

    while (i > 0) {
      sum += this.bit[i];
      i -= i & -i;
    }

    return sum;
  }

  sumRange(leftIdx, rightIdx) {
    return this.runningSum(rightIdx + 1) - this.runningSum(leftIdx);
  }
}
