var fizzBuzz = function(n) {
var arr= [];
    for(var i=1 ; i<=n; i++){
        if(i%15 === 0){
            arr.push("FizzBuzz")
            continue;
        }if(i%5 === 0){
            arr.push("Buzz")
            continue;
        }if(i%3 ===0) {
            arr.push("Fizz")
            continue;
        }else  arr.push(i.toString())
    }
    
    return arr;
};