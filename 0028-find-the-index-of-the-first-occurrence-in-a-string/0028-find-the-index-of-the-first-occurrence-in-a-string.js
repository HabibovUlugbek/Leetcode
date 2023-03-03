/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length ===0 ) return 0
    if(needle && haystack.includes(needle)){
        var arr = haystack.split(needle)
        return arr[0].length
    }if(!haystack.includes(needle)) return -1
};