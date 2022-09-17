/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let len = prices.length;
    if(len<=1 || k<=0) return 0;
    
    let profit = 0;
    if(k>= len/2){
        for(let i=0 ; i<len-1;i++){
            if(prices[i]<prices[i+1]){
                profit += prices[i+1]-prices[i];
            }
        }
        return profit;
    }
    let buy = new Array(k).fill(-Infinity);
    let sell = new Array(k).fill(0);
    
    for(let i=0 ; i<len; i++){
        for(let j=0 ; j<k ;j++){
            buy[j] = Math.max(buy[j],j===0 ? 0-prices[i] :sell[j-1]-prices[i])
            sell[j] = Math.max(sell[j],buy[j]+prices[i]);
        }
    }
    return sell[k-1]
};