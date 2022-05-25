/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2, k=0) {
    if(num1 ===0 || num2 === 0) return k;
    if(num1>num2) {
        num1 = num1-num2; k++
        return countOperations(num1,num2,k)
    } else {
        num2 = num2-num1 ;
        k++;
        return countOperations(num1,num2,k)
    }
};