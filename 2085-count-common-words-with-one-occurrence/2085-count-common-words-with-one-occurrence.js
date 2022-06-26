/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count = 0;
    let hash= {}
   let len = words1.length>words2.length ? words1.length : words2.length;
    for(let i=0 ; i<len; i++){
       if(hash[words1[i]]) hash[words1[i]]++
        else hash[words1[i]]=1
        
        if(hash[words2[i]]) hash[words2[i]]++
        else hash[words2[i]]=1
    }
     for(let i=0 ; i<len; i++){
       if(hash[words1[i]] === 2 ) {
           if(words2.includes(words1[i])) count++
       }
        if(hash[words2[i]] === 2 ) {
           if(words1.includes(words2[i])) count++
       }
    }
        
    return count/2;
    
};