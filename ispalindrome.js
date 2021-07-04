var isPalindrome = function(x) {
    var right, left ;
    if (x<0) {
        return false
    } else {
        left = x;
        x = x.toString().split('')
        right = parseInt(x.reverse().join(''))
        if(left === right ) {return  true } else return false; 
    }
};
console.log(isPalindrome(121))