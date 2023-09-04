/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    strs.forEach((str) => {
        let decode = str.split("").sort()
        if(hash[decode]) hash[decode].push(str)
        else hash[decode] = [str]
    })
    
    const values = Object.values(hash)
    return values
};