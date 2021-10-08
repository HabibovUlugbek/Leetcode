/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
    var arr =[];
    for(var i=2 ;i<Math.ceil(Math.sqrt(num)); i++){
        if(num%i === 0) {
            arr.push(i)
            arr.push(num/i)
        }
    }
    var sum= 0
    for(var i=0 ;i< arr.length ;i++){
        sum = sum + arr[i]
    }
    if(num === sum+1 && num !==1) return true
    return false;
};