/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let hash = {}
    for(let i=0 ; i<s.length; i++){
        if(hash[s[i]]) hash[s[i]]++
        else hash[s[i]]=1
    }
    
    for(let i=0 ; i<t.length; i++){
        if(hash[t[i]])hash[t[i]]--
        else hash[t[i]] = -1;
    }
    
    let count = 0
    for(let [key, value] of Object.entries(hash)){
        if(value < 0) count-=value;
        else count+=value;
    }
    return count
};