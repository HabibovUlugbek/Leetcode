/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let arr = []
    let count = 0;
    for(let i=0 ;i<words.length-1; i++){
        if(arr.includes(i))continue;
        for(let j=i+1;j<words.length; j++){
            let str = words[j].split("").reverse().join("")
            if(words[i] === str) {
                count++
                arr.push(i)
                arr.push(j)
                break;
            }
        }
    }
    return count
};