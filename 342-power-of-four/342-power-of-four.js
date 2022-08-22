/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    while(n>=4){
        if(n%4 !==0) return false;
        n=n/4;
    }
    if(n==1) return true;
    return false;
};