/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let prev = Array(target + 1).fill(0);
    prev[0] = 1;

    for (; n > 0; n--) {
        const cur = Array(target + 1).fill(0);
        for (let i = 1; i <= target; i++) {
            cur[i] = (cur[i - 1] + prev[i - 1]) % 1000000007;
            i > k && (cur[i] = (cur[i] - prev[i - k - 1] + 1000000007) % 1000000007);
        }
        prev = cur;
    }

    return prev[target];
};