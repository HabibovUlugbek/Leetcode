/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let hash  = {}
    s = s.split("");
    for(let i=0; i<s.length; i++){
        if(hash[s[i]]) hash[s[i]]++
        else hash[s[i]] =1;
    }
    let values = Object.values(hash);
    values = values.sort((a,b) => b-a);
    let result= 0;
    let f=values[0];
    for(let i=0 ; i<values.length; i++){
        if(values[i]>f){
            if(f>0) result+=(values[i]-f)
            else result+=values[i];
        }
        f = Math.min(f-1,values[i]-1);
    }
    
    
    return result;
};