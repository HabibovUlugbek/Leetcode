var multiply = function(num1, num2) {
    num1 = BigInt(num1);
    num2 = BigInt(num2)
    return eval(num1*num2).toString()
};

console.log(multiply("123","456"))