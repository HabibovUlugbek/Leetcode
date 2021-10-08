var selfDividingNumbers = function(left, right) {
    var arr=[];
    for (let i = left; i <= right; i++) {
       
        let num = i; 
        let number = i;
        num = JSON.stringify(num).split("")
        var k=0;
        for (let j = 0; j < num.length; j++) {
            
            if(number%num[j]!==0) {k++}
            
        }
        if(k===0){
            arr.push(number)
        }
    }

    return arr;
};

console.log(selfDividingNumbers(1,22))