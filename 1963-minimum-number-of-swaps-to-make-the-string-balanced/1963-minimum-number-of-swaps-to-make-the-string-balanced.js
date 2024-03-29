/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let stk = []
    for(let c of s){
        if(stk && c == ']')    stk.pop()
        else if(c == '[')   stk.push(c)
    }
    console.log(stk)
    return (stk.length) / 2
};