/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let a=1, e=1, i=1, o=1, u=1
    while(n-- > 1){
        a = a + e + i + o + u
        e = e + i + o + u
        i = i + o + u
        o = o + u
        u = u
    }
    return a + e + i + o + u
};