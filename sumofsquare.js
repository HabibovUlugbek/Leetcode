var judgeSquareSum = function(c) {
    if(Math.trunc(Math.sqrt(c)) == Math.sqrt(c)){
        return true
    } 
    for(i = 1;i<Math.sqrt(c);i++){
    let b = Math.trunc(Math.sqrt(c - i*i))
    if(b*b + i*i == c){
        return true
    }
    }
    return false;
};