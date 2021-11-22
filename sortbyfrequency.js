/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    return Object.values( s.split('').reduce((h,i) => {h[i] = (h[i]||'') + i; return h}, {}) ).sort((a,b) => b.length - a.length).join('')
};