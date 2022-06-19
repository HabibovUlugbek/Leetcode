/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map();
    let set = new Set();
    let strs = s.split(' ');
    if (pattern.length !== strs.length) return false;
    for (let i = 0; i < strs.length; i++) {
        if (!map.has(pattern[i])) map.set(pattern[i], strs[i]);
        else if (map.get(pattern[i]) !== strs[i]) return false;
        set.add(strs[i]);
    }
    if (map.size !== set.size) return false;
    return true;
};