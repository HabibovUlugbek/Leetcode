/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
let onesAlreadySeen = 0;
let res = 0;
for (let i = 0; i < s.length; i++) {
	if (s[i] == '0') {
		res = Math.min(res + 1 /* flip this '0' to '1' */,
					   onesAlreadySeen /* flip all '1' we've seen before to '0'*/);
	} else {
		// s[i] is '1'
		onesAlreadySeen++;
	}
}
return res;
};