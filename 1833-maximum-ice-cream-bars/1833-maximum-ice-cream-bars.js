/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a-b);
    let count = 0;
    for(let i=0; i<costs.length; i++){
        if(coins < costs[i]) return count
        coins -= costs[i];
        count++;
    }
    return count;
};