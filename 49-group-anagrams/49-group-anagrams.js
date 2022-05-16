/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map ={};
    for(let i=0; i< strs.length; i++){
        let key = strs[i].split("").sort().join("");
        if(map[key]) map[key].push(strs[i]);
        else map[key] = [strs[i]]
    }
    return Object.values(map)
};