/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    s=s.split("");
    var hash = {};
    let count = 1;
    for(let i=0 ; i<s.length; i++){
        if(hash[s[i]]){
            count++;
            hash = {}
            hash[s[i]] =1;
        } else hash[s[i]] = 1;
    } 
    
    return count
};