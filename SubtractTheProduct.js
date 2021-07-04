var subtractProductAndSum = function(n) {
    n=n.toString().split('')
    var sum=0 , multiple=1;
    console.log(n)
    for (let i = 0; i < n.length; i++) {
        sum+=n[i]*1
        multiple *= n[i]
        
    }
    return multiple -sum;
};
console.log(subtractProductAndSum(234))