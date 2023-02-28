class Solution {
public:
    int countPartitions(vector<int>& nums, int k) {
        int n = nums.size(), mod = 1000000007;
        
        long long totSum = 0;
        for(auto& x : nums){
            totSum += x;
        }
        
        if(totSum < (long long)(k + k)){
            return 0;
        }
        
        // dp[i][j] = number of invalid ways if we have first i elements and sum as j
        vector <vector <int>> dp(n + 1, vector <int>(k + 1));
        for(int i=0; i<=n; i++){
            for(int j=0; j<=k; j++){
                if(j == 0){
                    dp[i][j] = 1;
                }
                else if(i > 0 && j > 0){
                    dp[i][j] = dp[i - 1][j]; // don't choose the current element in the partition
                    if(j >= nums[i - 1]){
                        dp[i][j] += dp[i - 1][j - nums[i - 1]];
                        dp[i][j] %= mod;
                    }
                }
            }
        }
        
        int invalidWays = 0;
        for(int j=0; j<k; j++){
            invalidWays += dp[n][j];
            invalidWays %= mod;
        }
        
        invalidWays *= 2;
        invalidWays %= mod;
        
        int totalWays = 1;
        for(int i=1; i<=n; i++){
            totalWays *= 2;
            totalWays %= mod;
        }
        
        int ans = (totalWays - invalidWays + mod) % mod;
        
        return ans;        
    }
};