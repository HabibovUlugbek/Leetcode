 var minCostClimbingStairs = function(cost) {

   for(let i = cost.length - 3; i >= 0; i--){
      cost[i] += Math.min(cost[i+1], cost[i+2]);
    }

   //bcoz we can start from index 0, or index 1
   return Math.min(cost[0], cost[1]);
};