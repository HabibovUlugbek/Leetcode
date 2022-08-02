/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let cap = capacity
    for(let i= 0; i<plants.length; i++){
            steps++;
            capacity-= plants[i] 
        if(capacity < plants[i+1]){
            steps+=2*(i+1);
            capacity = cap
        }
        
    }
    return steps;
};