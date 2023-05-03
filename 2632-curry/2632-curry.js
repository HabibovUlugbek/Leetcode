/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    let nums = [];

    return function curried(...args) {
        nums = [...nums, ...args];

        if (fn.length === nums.length) {
            let result = fn(...nums);

            nums = [];

            return result;
        } else {
            return curried;
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
