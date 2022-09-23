/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let num = 1;
    for(let i=2; i<=n;i++){
        num = (num*Math.pow(2,i.toString(2).length)+i)%(Math.pow(10,9)+7);
    }
    return num % (Math.pow(10,9)+7)
};