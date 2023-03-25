/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    
    function gcd(x, y) {
      while(y) {
        var t = y;
        y = x % y;
        x = t;
      }
      return x;
    }

    let hash = {}
    for(let i=0 ;i<deck.length; i++){
        if(hash[deck[i]]) hash[deck[i]]++
        else hash[deck[i]] = 1
    }
    let len = Infinity
    for (const value of Object.values(hash)) {
        if(value<=1) return false ;
        len = gcd(len, value)
    }
    

    return len !== 1 
};

