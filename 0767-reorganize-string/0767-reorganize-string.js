/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let hash = {};
    for (let c of S) hash[c] = hash[c] + 1 || 1;

    let sort = Object.keys(hash).sort((a,b)=>hash[b] - hash[a]);
    let res = [];
    let index = 0;

    for (let i = 0;i<sort.length;i++) {
        let occur = hash[sort[i]];
        if (occur > parseInt((S.length + 1)/2)) return "";
        for (let j = 0;j < occur;j++) {
            if (index >= S.length) index = 1;
            res[index] = sort[i];
            index += 2;
        }
    } 
    return res.join('');
};