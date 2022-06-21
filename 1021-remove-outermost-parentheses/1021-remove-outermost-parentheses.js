/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let parenthesCount = 0;
    let result = "";
    
    for (const letter of S) {
        if (letter === "(") {
            if (parenthesCount) {
                result += letter;
            }
            parenthesCount++;
        } else {
            parenthesCount--;
            if (parenthesCount) {
                result += letter;
            }
        }
    }
    
    return result;
};