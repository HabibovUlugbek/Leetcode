/**
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
    let response = '';

    n = n.toString(2);
    
    for (let i = 0; i < n.length; i++) {
        response += n[i] ^ 1;
    }
    
    return parseInt(response, 2);
};