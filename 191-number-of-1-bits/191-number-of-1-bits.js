/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var sum  = 0;
    var arr = n.toString(2).split('').map(el => {
        el === "1" ?  sum++ : sum +=0;
    })
    return sum
};
