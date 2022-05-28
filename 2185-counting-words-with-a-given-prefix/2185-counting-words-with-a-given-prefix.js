/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
   let count = 0;
    for(let i=0 ;i<words.length ;i++){
        if(words[i].length <pref.length) continue;
        else if(words[i].length === pref.length && words[i] === pref)  count++ 
        else if(words[i].slice(0,pref.length) === pref ) count++;
    }
    return count  
};