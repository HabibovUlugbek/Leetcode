var superpalindromesInRange = function(left, right) {
    var r, l , x , suppalin=0 ;
        for (let i = Math.ceil(Math.sqrt(left*1)); i <= Math.trunc(Math.sqrt(right*1)) ; i++) {
            l = i;
            x = i.toString().split('')
            r = parseInt(x.reverse().join(''))
            if(l === r ) { 
                var square = Math.pow(i,2)
            
                if(square) {
                    l = square;
                    square = square.toString().split('')
                    r = parseInt(square.reverse().join(''))
                    if(l === r ) { suppalin++ } 
                        
                    }
             } 
        }
        
    return suppalin
};

function palindrome(n){

}

console.log("htrhyt"[-1])