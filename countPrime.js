var countPrimes = function(n) { 
    var count =0, k=0;
    if(n<=2) return 0;
    for (let i = 3; i < n; i++) {
       k=0;
       for (let j = 2; j <= i; j++){
           if(i%j === 0) k++;   
       }
       if(k<=1) count++;
    }
    return count+1;
};
