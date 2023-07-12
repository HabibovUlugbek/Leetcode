/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    details.forEach(person => {
        if(Number(person.slice(11,13)) > 60)count++
    })
    
    return count;
};