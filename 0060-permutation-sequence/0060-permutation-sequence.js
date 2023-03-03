/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let factorial = [1];
    for (let i=1;i<=n;i++) factorial[i]= i * factorial[i-1];

    let nums = Array.from({length: n}, (v, i) => i+1);
    let res = "";
    for (let i=n;i>0;i--) {
        index = Math.ceil(k / factorial[i - 1]); // decide to use which permutation set
        res+=nums[index - 1];
        nums.splice(index - 1, 1);
        k -= (factorial[i-1] * (index - 1));
    }
    return res;
};