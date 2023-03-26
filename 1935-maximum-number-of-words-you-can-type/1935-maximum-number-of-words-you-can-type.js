/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(" ");
    if(brokenLetters === "") return text.length
    let count = 0
    for(let i=0; i< text.length; i++){
        for(let j =0 ; j<brokenLetters.length; j++){
            if(text[i].includes(brokenLetters[j])) break;
            if(j === brokenLetters.length -1) count++
        }
    }
    return count
};