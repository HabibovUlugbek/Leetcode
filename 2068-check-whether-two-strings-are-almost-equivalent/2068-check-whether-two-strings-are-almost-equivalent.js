/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let hash = {};
    for(let i= 0 ;i<word1.length; i++){
        if(hash[word1[i]]) hash[word1[i]]++
        else hash[word1[i]]=1;
        if(hash[word2[i]])hash[word2[i]]--
        else hash[word2[i]]=-1
    }
    
    for (const [key, value] of Object.entries(hash)) {
        if(value > 3 || value < -3) return false
    }
    return true;
};