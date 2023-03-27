var countGoodNumbers = function(n) {
    var mod = 1000000007n;
    var even = Math.ceil(n/2);
    var odd = n - even; 
    function myPow(x,y)
    {
        if(y===0)
        {
            return 1n;
        }
        var res = 1n;
        res *= myPow(x, Math.floor(y/2)); // cut in half in each recursion
        res *= res;
        if(y%2===1)
        {
            res *= BigInt(x);
        }
        res %= mod;
        return res;
    }
    var ans = myPow(5, even) * myPow(4, odd);
    ans %= mod; 
    return Number(ans);
};