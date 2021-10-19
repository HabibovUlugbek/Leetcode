function detect(n) {
    var number = 1;
    var i=0;
    for(i=1 ;i<=n; i++){
    
        i=i+number.toString().length*1;
        number = number+1;
    }
    console.log(Math.trunc((number)/Math.pow(10,(i-n)))%10)
    return Math.trunc((number)/Math.pow(10,(i-n)))%10;
    
}

console.log(detect(10))