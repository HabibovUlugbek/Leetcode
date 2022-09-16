/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    prices[0] = 0;
    let profit = 0;
    
    for(let i=1 ;i<prices.length; i++){
        if(buy > prices[i]){
            buy = prices[i];
            prices[i] = 0;
        }else {
            profit = Math.max(prices[i] - buy , profit)
        }
        
    }
    return profit;
};