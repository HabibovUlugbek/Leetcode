/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let str = 1
    let len = 4
    for (let i = 2; i <= n; i++) {
        if (i === len) {
            len = len * 2
        }
        str = (str * len + i) % 1000000007
    }
    return str
};