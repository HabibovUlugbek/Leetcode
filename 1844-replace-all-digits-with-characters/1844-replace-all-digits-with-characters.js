/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
	for (let i = 1; i < s.length; i+=2) {
        let value = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
        s = s.replace(s[i],value);
	}
    return s;
};