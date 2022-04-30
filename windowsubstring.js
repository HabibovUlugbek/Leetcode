/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const freqMap = t.split('').reduce((a, x) => {
        a[x] = a[x] || 0
        a[x]++
        return a
    }, {})
    let count = 0
    let j = -1
    let i = 0
    let m = {}
    do {
        j++
        const val = s[j]
        if(freqMap[val]) {
            m[val] = m[val] || 0
            m[val]++
            if(m[val] <= freqMap[val]) count++
        }
    } while (count < t.length && j < s.length)
    if(j === s.length) return ""
    let res = s.substring(i, j+1)
    for(i = i + 1;j<s.length && i <= j;i++) {
        let prev = s[i-1]
        if(m[prev]) {
            m[prev]--
            if(m[prev] < freqMap[prev]) {
                j++
                while(s[j] !== prev && j<s.length) {
                    if(m[s[j]] !== undefined) m[s[j]]++ 
                    j++
                }
                if(j === s.length) {
                    break
                }
                m[s[j]]++
            }
        }
        if(res.length > (j - i + 1)) {
            res = s.substring(i, j+1)
        }
    }
    return res;
};
