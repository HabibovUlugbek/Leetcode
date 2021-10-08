var xorOperation = function(n, start) {
    var xor =start

    for (let i = 0; i < n; i++) {  
        if(i>=1)
        xor =xor^(start +2*i)
    }
    return xor;
};