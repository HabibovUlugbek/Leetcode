/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let arr = s.split("")
    let set = new Set(arr)
    
    return set.size
};