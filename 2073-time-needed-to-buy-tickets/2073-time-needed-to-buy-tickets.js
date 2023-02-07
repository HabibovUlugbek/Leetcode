/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    while(tickets[k]>0){
        for(let i=0 ; i<tickets.length; i++){
            if(tickets[i] ===0) continue;
            else {
                time++ 
                tickets[i]--
            }
            if(tickets[k] ===0 )return time;
        }
    }
};