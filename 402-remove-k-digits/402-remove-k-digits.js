/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
	const stack = [];

	for (const current of num) {
		while (k && stack.length && stack[stack.length - 1] > current) {
			stack.pop();
			k -= 1;
		}
		if (stack.length || current !== '0') stack.push(current);
	}

	while (stack.length && k--) stack.pop();

	return stack.length ? stack.join('') : '0';
};