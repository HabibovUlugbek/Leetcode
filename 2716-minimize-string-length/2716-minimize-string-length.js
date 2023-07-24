/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let hash = {}
    for(let i=0 ; i<s.length; i++) {
        if(hash[s[i]])hash[s[i]]++
        else hash[s[i]] = 1
    }
    
    return Object.keys(hash).length
};