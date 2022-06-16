/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0 ;
    s = s.split("");
    
    let l =0;
    let r= 0;

    for(let i=0; i<s.length;i++){
        if(s[i] === "L")l++;
        if(s[i] === "R")r++;
        if(l===r & l!=0) {
            count++;
            l=0;
            r=0;
        }
    }
    return count;
};