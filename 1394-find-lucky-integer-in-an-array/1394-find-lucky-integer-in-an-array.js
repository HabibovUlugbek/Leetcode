/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let num = 0;
    let hash = {}
    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]]) hash[arr[i]]++
        else hash[arr[i]] = 1
    }
    console.log(hash)
    
    for(const [key,value] of Object.entries(hash)){
        if(key == value)num = Math.max(num, key);
    }
    return num? num : -1
};