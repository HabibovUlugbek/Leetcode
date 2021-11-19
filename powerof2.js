/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    while(n>=2){
        if(n%2 !==0) return false;
        n=n/2;
    }
    if(n==1) return true;
    return false;
};