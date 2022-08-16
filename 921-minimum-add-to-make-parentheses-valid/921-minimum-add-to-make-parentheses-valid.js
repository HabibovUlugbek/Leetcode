/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let t = s.replace("()","");
    if(t.length === s.length) return s.length
    else return minAddToMakeValid(t)
};