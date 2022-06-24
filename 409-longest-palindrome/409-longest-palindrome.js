/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    s = s.split("");
    let hash = {};
    for(let i=0; i<s.length; i++){
        if(hash[s[i]]) hash[s[i]]++
        else hash[s[i]]=1;
    }
    
    let len = 0;
    let arr = [];
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(!arr.includes(s[i])){
            if(hash[s[i]] > 1){
            if(hash[s[i]]%2===0)len +=hash[s[i]];
            else {
                len+=hash[s[i]]-1;
                count++;
            }
        }else count++  ;
            arr.push(s[i]);
        }
    }
    if(count>0) return len+1;
    return len;
};