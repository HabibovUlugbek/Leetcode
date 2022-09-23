/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i = 1; i<=n/2 ;i++){
        console.log(i ,!i.toString().includes("0"))
        if(!i.toString().includes("0") && !(n-i).toString().includes("0"))  return [i,n-i]
    }
};