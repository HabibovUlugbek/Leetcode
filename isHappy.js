/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    var arr = n.toString().split('');
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
       
        sum +=arr[i]*arr[i];
    }
    if(sum === 1) return true
    if(sum<10 && sum !==1) return false
    isHappy(sum);
};