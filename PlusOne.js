var plusOne = function(digits) {
    let  newPLus = [];
    let length = digits.length ;
    for (let i = digits.length - 1; i >= 0; i--) {
        let n = digits[i];
        if (n !== 9) {
            digits[i]++;
            break; 
        } else {
            digits[i] = 0;
        }
    }
    if (digits[0] === 0) {
        digits.unshift(1)
    }
    return digits;
   
};

 console.log(plusOne([9, 9]))