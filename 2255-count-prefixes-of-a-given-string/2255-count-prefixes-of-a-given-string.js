/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0;
    for(let i=0 ;i<words.length ;i++){
        if(words[i].length > s.length) continue;
        else if(words[i].length === s.length && words[i] === s)  count++ 
        else if(s.slice(0,words[i].length) === words[i] ) count++;
    }
    return count  
};