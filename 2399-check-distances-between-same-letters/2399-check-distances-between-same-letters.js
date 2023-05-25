/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    let checked = [];
    for(let i=0 ; i<s.length; i++){
        if(checked.includes(s[i])) continue
        let last = s.lastIndexOf(s[i])
        let index = s[i].charCodeAt(0) -97
        if(distance[index] !== last-i-1 ) return false;
        checked.push(s[i])
    }
    return true;
};