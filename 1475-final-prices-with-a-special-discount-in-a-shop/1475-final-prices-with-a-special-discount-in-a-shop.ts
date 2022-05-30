function finalPrices(prices: number[]): number[] {
    let result = [];
    for(let i= 0 ;i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++){
            if(prices[i]>= prices[j]) {
                result.push(prices[i]-prices[j]);
                break;
            }else if(j === prices.length-1) result.push(prices[i])
        }
    }
    result.push(prices[prices.length-1])
    return result;
};