var findComplement = function(num) {
    return num ^ parseInt('1'.repeat(num.toString(2).length), 2)
};