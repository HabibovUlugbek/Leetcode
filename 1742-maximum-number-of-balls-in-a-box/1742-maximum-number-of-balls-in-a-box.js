/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let hashtable = {};
    for(let i = lowLimit; i<=highLimit; i++){
        let numberssum = i.toString().split("").reduce((prev , curr) => prev +=curr*1, 0);
        if(!hashtable[numberssum]) hashtable[numberssum] =1 
        else hashtable[numberssum]++
    }
    
    return Math.max(...Object.values(hashtable))
};