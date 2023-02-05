var findAnagrams = function(s, p) {
    const n = s.length;
    const m = p.length;

    const count = new Array(26).fill(0);
    for(let i = 0; i < m; i += 1) {
        count[p.charCodeAt(i) - 97] += 1;
    }

    const result = [];
    let left = 0;
    let right = 0;
    while(right < n) {
        if(count[s.charCodeAt(right) - 97] > 0) {
            count[s.charCodeAt(right) - 97] -= 1;
            right += 1;
        } else if(left < right) {
            count[s.charCodeAt(left) - 97] += 1;
            left += 1;
        } else {
            left += 1;
            right += 1;
        }

        if(right - left === m) {
            result.push(left);
        }
    }

    return result;
};