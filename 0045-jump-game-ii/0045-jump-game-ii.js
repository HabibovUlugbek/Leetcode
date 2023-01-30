/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let dp = [];
    dp[0]=0;
    for(let i=0 ; i<nums.length; i++){
        // console.log(dp)
        for(let j=i+1;j<=i+nums[i] ; j++){
            if(dp[j]) dp[j] = Math.min(dp[i]+1, dp[j])
            else dp[j] = dp[i]+1
        }
    }
    // console.log(dp)
    return dp[nums.length-1]
};