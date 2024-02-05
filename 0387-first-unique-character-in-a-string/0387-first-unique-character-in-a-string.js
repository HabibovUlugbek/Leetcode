/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result =-1;
    let hash = {}
    
    for(let i=0; i<s.length; i++) {
        if(!hash[s[i]]) hash[s[i]] = [i]
        else hash[s[i]].push(i)
    }
    
    for(const [key, values] of Object.entries(hash)){
        if(values.length === 1) return values[0]
    }
    
    return result;
};