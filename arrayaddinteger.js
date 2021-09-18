/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
    num = BigInt(num.join(',').split(',').join(''))
    num = (num + BigInt(k)).toString().split('')
    return num;
    
};
