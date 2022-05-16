/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]]) map[arr[i]]++;
        else map[arr[i]] = 1;
    }
    for(let i=0; i<arr.length; i++){
         for(let j=i+1; j<arr.length; j++){
             if(map[arr[i]] === map[arr[j]] && arr[i]!== arr[j]) return false
         }
    }
    return true;
};