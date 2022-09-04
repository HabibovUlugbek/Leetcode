/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for(let i=2; i<=n-2; i++){
        let num = n.toString(i)
        let reversenum = num.split("").reverse().join("");
        if(reversenum != num) return false;
    }
    return true;
};