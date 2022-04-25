/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max =0 , count =0;
    let str = s.split("");
    for(let i=0; i<str.length; i++){
        if(str[i] == '(') {
            count++;
            max = Math.max(max,count)}
        if(str[i] == ')') {
            count--;
           }
    }
    return max;
};
