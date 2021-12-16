/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    var sum =0;
    for (let i = 0; i < operations.length; i++) {
        if(operations[i].includes('+'))sum++;
        else sum--
        
    }
    return sum;
};