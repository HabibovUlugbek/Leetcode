/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let lookup = {};
    s = s.split("");
    for(char of s) {
        lookup[char] = lookup[char] ? lookup[char]+1 : 1;
    }
    let count = lookup[s[0]];
    for(char of s) {
        if(lookup[char] !== count) return false;
    }
    return true;
};