/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    for(let i =1  ; i<prices.length ;i++){
        if(prices[i] > prices[i-1]){
            maxprofit  = maxprofit + (prices[i] - prices[i-1])
        }
    }
    return maxprofit;
};