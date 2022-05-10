/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
let result = []

const [word1, word1Len, , word2, word2Len] = s;

for(let i= word1.charCodeAt(0) ; i<=  word2.charCodeAt(0) ;i++){
    let aa = (String.fromCharCode(i))
    for(j = word1Len ; j <=word2Len ; j++){
        result.push(aa+j)
    }
}
    return result

};