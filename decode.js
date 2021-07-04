var decode = function(encoded, first) {
    var number= [];
    for (let i = 0; i < encoded.length; i++) {
        var num;
        if (encoded.length ===1) {
            number.push(first)
            number.push(first+encoded[i])
        } else {
             if (i===0) {
            number.push(first)
            num = first
            }
            num = encoded[i] - num
        console.log("encode " + encoded[i]) 
        console.log("num " +num)
            if(num < 0) {num = num *(-1)}
            number.push(num)
    }
        }
       
    return number;
};

console.log(decode([6],1))