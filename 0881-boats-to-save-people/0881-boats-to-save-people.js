/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let count = 0;
    people.sort((a,b) => b-a);
   while(people.length>0){
        if(people[0]<=limit ){
            if(people[0]+people[people.length-1]<=limit){
                count++;
               people.shift()
               people.pop()
            }else {
                count++;
                people.shift()
            }
        }
    }
    return count
};