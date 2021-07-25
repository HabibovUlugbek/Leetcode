var hammingWeight = function(n) {
    var sum  = 0;
    var arr = n.toString(2).split('').map(el => {
        el === "1" ?  sum++ : sum +=0;
    })
    return sum
};

console.log(hammingWeight(11111111111111111111111111111101))