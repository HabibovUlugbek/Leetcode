var nthSuperUglyNumber = function(n, primes) {
    var ugly=0 , k=0;
    while(k <= n){
        i
        j=1;
        for (let i = 0; i < primes.length; i++) {
            if(j%primes[i] === 0) {
                ugly =j;
                k++;
                break;
            }
            
        }
        j++;
    }

    return ugly;
};