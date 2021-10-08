var complexNumberMultiply = function(num1, num2) {
    var num1arr=num1.split('+')
    var num2arr = num2.split('+')

    num1arr[1] = num1arr[1].replace('i',"")
    num2arr[1] = num2arr[1].replace('i',"")
    console.log(num1arr , "   --- " , num2arr)
    var sum =0;
    var int = (num1arr[0]*num2arr[0] + (num1arr[1]*num2arr[1]*(-1))) 
    var complex = (num1arr[0]*num2arr[1]+num1arr[1]*num2arr[0])

    sum = int.toString() + '+' + complex.toString() + "i"

    return sum
};

console.log(complexNumberMultiply("1+-1i","1+-1i"))