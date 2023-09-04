/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    strs.forEach((str) => {
        let decode = str.split("").sort().join("")
        if(hash[decode]) hash[decode].push(str)
        else hash[decode] = [str]
    })
    
    return Object.values(hash)
     
};