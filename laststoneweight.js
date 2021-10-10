/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    stones = stones.sort((a,b) => b-a)
    while(stones.length >= 2){
          if(stones[0] === stones[1]) {
            stones.shift();
              stones.shift();
              }
        if(stones[0] > stones[1]){
            x = stones[0] -stones[1]
            stones.shift();
            stones[0] = x;
        }
        
        stones = stones.sort((a,b) => b-a)
        
          }
    if(stones.length > 0){
        return stones[0] 
    } else  return 0;
};