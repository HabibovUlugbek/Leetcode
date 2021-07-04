var divide = function(dividend, divisor) {
    var num;
    const MIN = Math.pow(-2, 31);
    const MAX = MIN * -1 - 1;
    num = parseInt(dividend/divisor);
    if (num < MIN) {
        return MIN;
    } else if (num > MAX) {
        return MAX;
    }
         else{
            return num;
        }
    
};