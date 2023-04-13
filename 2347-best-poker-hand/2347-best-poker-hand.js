/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let set = new Set(suits);
    if(set.size === 1 ) return "Flush"
    let hash = {}
    for(let i=0 ; i<ranks.length;i++){
        if(hash[ranks[i]])hash[ranks[i]]++
        else hash[ranks[i]]=1
    }
    
    let max = Math.max(...Object.values(hash))
    if(max>=3) return "Three of a Kind"
    if(max === 2 ) return "Pair"
    return "High Card"
};