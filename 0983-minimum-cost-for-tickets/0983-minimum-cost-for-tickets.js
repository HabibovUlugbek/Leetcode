/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let last = days[days.length -1]
    let dp =new Array(last+1).fill(0)
    let week = costs[1]
    let month = costs[2];
    let day = costs[0]
    for(let i=1;i<=last;i++){
        if(i>=7) week=dp[i-7]+costs[1]
        if(i>=30) month = dp[i-30]+costs[2]
        if(days.includes(i)) day = dp[i-1]+costs[0]
        else day = dp[i-1]
        dp[i] = Math.min(day,week, month)
    }
    return  dp[last]
};