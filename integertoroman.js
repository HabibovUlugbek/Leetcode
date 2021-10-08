var intToRoman = function(num) {
    var digit, r = '';
    var convert = (digit, tens, fives, ones) => {
        if(digit === 9) { r = r.concat(ones + tens); }
        else if(digit > 5) { r = r.concat(fives + ones.repeat(digit % 5)); }
        else if(digit === 5) { r = r.concat(fives); }
        else if(digit === 4) { r = r.concat(ones + fives); }
        else if(digit > 0) { r = r.concat(ones.repeat(digit)) }
    };
    
    if(num > 999) { convert(Math.floor(num/1000), '', '', 'M');
        num = Math.floor(num%1000);
    }
    if(num > 99) { convert(Math.floor(num/100), 'M', 'D', 'C');
        num = Math.floor(num%100);
    }
    if(num > 9) { convert(Math.floor(num/10), 'C', 'L', 'X');
        num = Math.floor(num%10);
    }
    convert(num, 'X', 'V', 'I');
    return r;
};