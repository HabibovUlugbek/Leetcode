var CustomStack = function (maxSize) {
  // set max size
  this.maxSize = maxSize;

  // set initial size
  this.size = 0;

  // stack
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  // make sure we're not at max size
  if (this.size !== this.maxSize) {
    // push as normal
    this.stack.push(x);
    // increment size
    this.size++;
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  // check if empty to return -1
  if (this.size === 0) {
    return -1;
  } else {
    // decrement size and return pop()
    this.size--;
    return this.stack.pop();
  }
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  // iterate from 0 to k (or size since thats as far we can go)
  for (let i = 0; i < Math.min(k, this.size); i++) {
    // increment at this index
    this.stack[i] += val;
  }
};