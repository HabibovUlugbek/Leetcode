/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    var bool = []
    var max = Math.max(...candies)
    console.log(max)
    for(var i=0 ; i< candies.length ; i++){
        if(max> (candies[i]+extraCandies)) bool.push(false)
        else bool.push(true)
    }
    
    return bool
};