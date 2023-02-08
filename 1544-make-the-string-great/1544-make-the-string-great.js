/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = []
    let i=0;
    while(i<s.length){
        
        if(stack.length>0 && Math.abs(s.charCodeAt(i)-stack[stack.length -1].charCodeAt(0)) === 32){
            stack.pop();
        } else {
            stack.push(s[i])
        }
        i++;
    }
    
    return stack.join("");
};