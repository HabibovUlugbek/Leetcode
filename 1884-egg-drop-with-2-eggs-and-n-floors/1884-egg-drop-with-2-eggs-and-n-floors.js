/**
 * @param {number} n
 * @return {number}
 */
const twoEggDrop = (n) => {
    let k = 2, dp = Array(k + 1).fill(0), res = 0;
    while (dp[k] < n) {
        for (let i = k; i > 0; i--) {
            dp[i] = dp[i] + dp[i - 1] + 1;
        }
        res++;
    }
    return res;
};