/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(s, cost) {
    var result = 0;
    var tempIndex = 0;
    for(let i=1; i<s.length; i++){
        tempIndex = i-1;
        while(s[i] === s[i-1]){
            var min =  Math.min( cost[tempIndex] , cost[i])
            
            if(cost[i] !== min){
                tempIndex = i;
            }
            result += min;
            i++
        }
    }
    return result
};