/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let barCount = 0, count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "|") barCount++;
        else if(s[i] === "*" && barCount % 2 === 0) count++;
    }
    
    return count;
};