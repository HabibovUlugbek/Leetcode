/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    var j=0;
    while(j*j <= num){
        if(j*j === num ) return true
        j++
    }
    return false
};