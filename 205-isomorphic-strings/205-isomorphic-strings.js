/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return true;
    s = s.split("");
    t = t.split("");
    for(let i=0; i<s.length-1; i++){
        for(let j=i+1; j<s.length; j++){
        if(s[i] == s[j] ){
            if(t[i] === t[j]) continue;
            else return false 
        } 
        if(t[i] == t[j] ){
            if(s[i] === s[j]) continue;
            else return false 
        }
            
        }
    }
    return true;
};