/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let fb = -Infinity;
    let sb = -Infinity;
    let fs = 0 ;
    let ss = 0;
    
    if(prices.length === 0 ) return 0;
    for(let i=0;i<prices.length; i++){
        fb = Math.max(fb,-prices[i]);
        fs = Math.max(fs,fb+prices[i]);
        sb = Math.max(sb,fs-prices[i]);
        ss = Math.max(ss,sb+prices[i])
    }
    return ss;
};