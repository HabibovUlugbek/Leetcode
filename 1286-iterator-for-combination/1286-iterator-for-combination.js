/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.combination = build(combinationLength, characters.split("").sort().join(""));
    
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    return this.combination.shift();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.combination.length >0
};

function build(max, str, out = [], curr = ""){
    if(curr.length === max){
        out.push(curr);
        return ;
    }
    else{
        for(let i = 0; i<str.length; i++){
            build(max, str.slice(i+1), out, curr + str[i]);
        }
    }
    
    return out;
}