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
    let day = 0
    for(let i=1;i<=last;i++){
        if(days.includes(i)){
            if(i>=7) week=dp[i-7]+costs[1]
            if(i>=30) month = dp[i-30]+costs[2]
            day = dp[i-1]+costs[0]
            dp[i] = Math.min(day,week, month)
        } else {
            if(i>=7) week=dp[i-7]+costs[1]
            if(i>=30) month = dp[i-30]+costs[2]
            dp[i] = Math.min(dp[i-1],week, month)
        }
    }
    if(last<7) week = costs[1]
    else week = dp[last-7]+costs[1] 
    if(last<30) month = costs[2]
    else month = dp[last-30]+costs[2] 
    day = dp[last]
    return Math.min(day, week, month)
};