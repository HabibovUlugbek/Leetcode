/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = []
    for(let i=0 ; i<=n ; i++){
        let a = i;
        let count = 0
        while(a){
            a &=(a-1);
            count++
        }
        res.push(count)
    }
    return res;
};