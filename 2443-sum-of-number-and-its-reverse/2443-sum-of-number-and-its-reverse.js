/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    if(num ===0) return true
    for(let i=1; i<= Math.ceil(num/2) ; i++) {
        let next = num-i ; 
        
        if(i == parseInt(next.toString().split("").reverse().join(""))) {
            return true;
        }
    }
    return false;
};