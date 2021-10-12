/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(" ")
    for(var i=0 ; i<sentence.length ; i++){
        if(sentence[i].slice(0,searchWord.length).includes(searchWord)) return i+1
    }
    return -1
};