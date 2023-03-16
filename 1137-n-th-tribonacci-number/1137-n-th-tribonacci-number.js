/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    var fib = 0;
    var fib0=0
    var fib1=1 
    var fib2=1;
    if(n===0) return 0 ;
        if(n===2 || n ===1) return 1;
    for(var i=2;i<n; i++){
      fib = fib1 +fib2+fib0;
        fib0=fib1;
        fib1=fib2;
        fib2=fib
    }
    return fib
};