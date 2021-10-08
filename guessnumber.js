var guessNumber = function(n) {
    var bool =false;
    var i=Math.round(n/2)
    var end=n , begin=0;
    while(!bool){
        var k = guess(i)
        if(k === -1){
            end = i
            i= Math.round((i+begin)/2)
        }else if(k ===1){
            begin =i
            i =Math.round((i+end)/2)
        } if(k===0) bool =true
    }
    
    return i;
};