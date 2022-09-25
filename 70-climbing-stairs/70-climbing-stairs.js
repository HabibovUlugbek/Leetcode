/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<2 ) return 1;
    let twostep = 1;
    let onestep = 2;
    for (let i=2 ; i<n; i++){
        let temp =onestep 
        onestep += twostep;
        twostep = temp
    }
    return onestep;
};