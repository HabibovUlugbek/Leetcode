/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let str = ""
    let hash = {};
    for(let i=0 ; i<s.length; i++){
        if((hash[s[i]])) hash[s[i]]++
        else hash[s[i]]=1;
        if(s[i].toLowerCase() === s[i]){
            if(hash[s[i].toUpperCase()]) str+=s[i];
        }else {
            if(hash[s[i].toLowerCase()]) str+=s[i];
        }
    }
    str = str.toUpperCase().split("").sort();
    return str.length > 0 ? str[str.length-1] : ""
    
};