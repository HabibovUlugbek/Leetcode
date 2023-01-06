/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    for(let i=0 ; i<strs[0].length ; i++){
        let str = "";
        for(let j = 0 ; j<strs.length ; j++){
            str+=strs[j].charAt(i);
        }
        count += str !== str.split("").sort().join("") ? 1 : 0
    }
    return count;
};