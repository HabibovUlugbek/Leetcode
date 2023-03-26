/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let str =  s.replace(part, "") 
    return str === s ? s : removeOccurrences(str,part);
};