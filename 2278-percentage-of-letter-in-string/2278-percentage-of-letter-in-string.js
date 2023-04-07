/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let str = s.replaceAll(letter,"");
    return Math.floor((s.length-str.length)/s.length *100)
};