/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    s = s.split("");
    t= t.split("")
    let hashs = {};
    let hasht = {};
    for(let i = 0; i< s.length; i++){
        if(hashs[s[i]]) hashs[s[i]]++;
        else hashs[s[i]] = 1;
        if(hasht[t[i]]) hasht[t[i]]++
        else hasht[t[i]] = 1;
    }
    let count = 0
    let keys = Object.keys(hashs)
    for(let i = 0; i< keys.length; i++){
        if(hashs[keys[i]] && hasht[keys[i]]) {
            if(hasht[keys[i]] <= hashs[keys[i]]){count+=hashs[keys[i]] - hasht[keys[i]]}
        }
        else count+=hashs[keys[i]];        
    }
    
    return count ;
};