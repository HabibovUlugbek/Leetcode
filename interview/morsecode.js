/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."],res=[];
     
    words.forEach((word)=>{
        let str=''
        for(let i=0;i<word.length;i++){
            str+= morse[word[i].charCodeAt()-97]
        }
        res.push(str);
    })
     return [...new Set(res)].length;
 };