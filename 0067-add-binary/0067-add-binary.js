/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return [BigInt(`0b${a}`), BigInt(`0b${b}`)].reduce((bigA, bigB) => (bigA + bigB).toString(2));
};