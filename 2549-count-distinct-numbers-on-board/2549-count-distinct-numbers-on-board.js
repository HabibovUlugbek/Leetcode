/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(n) {
    const set = new Set(), visited = new Set();
    set.add(n);


    while (visited.size !== set.size){
        for (const x of [...set]) {
            if (visited.has(x)) continue;
            visited.add(x)
            for (let i = 1; i<n; i++) {
                if (x%i === 1) {
                    set.add(i)
                }
            }
        }
    }
    return set.size;
};