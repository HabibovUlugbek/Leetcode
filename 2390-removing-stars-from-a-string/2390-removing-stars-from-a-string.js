/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    let i=0;
    while(i<s.length){
        if(s[i] === '*'){
            if(stack.length> 0) stack.pop()
        }else stack.push(s[i])
        i++;
    }
    
    return stack.join("")
};