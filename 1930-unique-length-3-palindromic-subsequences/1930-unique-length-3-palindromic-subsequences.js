var countPalindromicSubsequence = function(s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], [s.length, 0])
        }
        if (i < map.get(s[i])[0]) {
            map.get(s[i])[0] = i
        }
        if (i > map.get(s[i])[1]) {
            map.get(s[i])[1] = i
        }
    }
    let res = new Set()
    for (let i = 1; i < s.length - 1; i++) {
        for (const [char, minMax] of map) {
            if (minMax[0] < i && i < minMax[1]) {
                res.add(`${s[i]},${char}`)
            }
        }
    }
    return res.size
};