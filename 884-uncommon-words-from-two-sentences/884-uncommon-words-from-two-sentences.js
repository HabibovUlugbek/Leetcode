/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(words1, words2) {
    let result= [];
    let hash= {}
    words1 = words1.split(" ");
    words2 = words2.split(" ");
    let len = words1.length>words2.length ? words1.length : words2.length;
    for(let i=0 ; i<len; i++){
       if(hash[words1[i]]) hash[words1[i]]++
        else hash[words1[i]]=1
        
        if(hash[words2[i]]) hash[words2[i]]++
        else hash[words2[i]]=1
    }
    
     for(let i=0 ; i<len; i++){
       if(hash[words1[i]] === 1 && words1[i] ) {
           result.push(words1[i])
       }
        if(hash[words2[i]] === 1 && words2[i] ) {
          result.push(words2[i])
       }
    }
        
    return result;
    
};