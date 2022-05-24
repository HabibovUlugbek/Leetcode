/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let reverse = num.toString().split("").reverse().join("")*1;
    let doublereverse = reverse.toString().split("").reverse().join("")*1
    return num === doublereverse
};