/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    allowed = allowed.split("")
    var k=0 ;
    for(var i=0; i<words.length; i++){
        for(var j=0; j<allowed.length; j++){
           words[i]= words[i].split(allowed[j]).join("")
        }
        if (words[i].length === 0) k++
    }
    return k;
};