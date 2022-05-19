/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n, sum = 0) {
    if(n<2) return sum;
    if(n%2 === 1){
         sum = sum + (n-1)/2 ;
         n= (n-1)/2+1;
        return numberOfMatches(n,sum)
    } else {
        sum = sum + (n)/2;
        n=n/2;
        return numberOfMatches(n,sum)
    }
    
};