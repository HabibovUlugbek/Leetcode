/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let hash = {}
    for(let i=0 ; i<word.length; i++){
        if(hash[word[i]]) hash[word[i]]++
        else hash[word[i]] =1
    }
   
    for(let i=0 ;i<Object.values(hash).length; i++){
        let values = Object.values(hash)
        values[i] = values[i]-1;
        let set = new Set(values)
        if(set.size === 1 || (set.size ===2 && set.has(0)) ) return true
    }
    return false
};