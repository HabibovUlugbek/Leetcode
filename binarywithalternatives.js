/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    n = n.toString('2').split('');
    for(let i=0; i<n.length-1;i++){
        if(n[i] === n[i+1]) return false;
    }
    return true;
};