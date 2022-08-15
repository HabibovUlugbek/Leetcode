/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let hash = {};
    s = s.split("");
    for(let i=0 ;i<s.length; i++){
        if(hash[s[i]]){
            return s[i]
        }else hash[s[i]]=1;
    }
};