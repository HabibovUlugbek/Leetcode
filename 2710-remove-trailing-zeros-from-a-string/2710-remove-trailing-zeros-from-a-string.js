/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    num = num.split("")
    let pop = num.pop()
    while(pop === "0") {
        pop = num.pop()
    }
    num.push(pop)
    return num.join("")
};