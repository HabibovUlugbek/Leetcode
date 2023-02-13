/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let hash = {}
    for(let i=0 ; i<matches.length; i++){
        if(hash[matches[i][1]]) hash[matches[i][1]].lose++
        else hash[matches[i][1]] = {lose:1}
         if(!hash[matches[i][0]])hash[matches[i][0]] = {lose:0}
    }
    let result = [[],[]];
    for (const [key, value] of Object.entries(hash)) {
        if(value.lose === 0) result[0].push(key)
        else if(value.lose === 1) result[1].push(key)
    }
    
    return result;
};