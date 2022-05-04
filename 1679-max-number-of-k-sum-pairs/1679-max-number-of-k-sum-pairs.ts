function maxOperations(nums: number[], k: number): number {
    let m = new Map(), ans = 0
    for (let n of nums)
        if (n < k)
            if (m.get(k - n)) m.set(k - n, m.get(k - n) - 1), ans++
            else m.set(n, (m.get(n) || 0) + 1)
    return ans
};