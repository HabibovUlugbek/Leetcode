/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let result = [];
    let hashPattern = {}
    for(let i=0; i<pattern.length; i++){
        if(hashPattern[pattern[i]]){
            hashPattern[pattern[i]].push(i);
        }else hashPattern[pattern[i]] = [i];
    }
    
    for(let i=0; i<words.length; i++){
            let hash= {}
        for(let j=0; j<words[i].length; j++){
            if(hash[words[i][j]]){
                hash[words[i][j]].push(j);
            }else hash[words[i][j]] = [j];
        }
        
        if(Object.values(hashPattern).equals(Object.values(hash))) {
            result.push(words[i])
        }
    }
    
    
    return result;
};


if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});