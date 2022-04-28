var generateParenthesis = function(n) {
    let map = new Map();
    
    map.set(0, ['']);
    for (let i = 1; i <= n; i++) {
        let j = 0, arr = [];
        while (j < i) {
            let arrj = map.get(j), arri = map.get(i - j - 1);
            arrj.forEach(pairj => {
                arri.forEach(pairi => {
                    arr.push('(' + pairj + ')' + pairi);
                })
            })
            j++;
        }
        map.set(i, arr);
    }
    
    return map.get(n);
};
