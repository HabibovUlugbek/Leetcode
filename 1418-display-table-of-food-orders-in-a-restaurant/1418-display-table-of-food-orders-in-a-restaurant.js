/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    let food = [];
    for(let i= 0; i<orders.length; i++){
        if(!food.includes(orders[i][2]))food.push(orders[i][2])
    }
    food.sort()
    food = ["Table", ...food]
    let template = new Array(food.length).fill("0")
    let results = [];
    for(let i= 0; i<orders.length; i++){
    let not = true
        for(let j=0 ; j<results.length; j++){
            let index = food.indexOf(orders[i][2])
            if(results[j][0] === orders[i][1]){
                results[j][index] = String(Number(results[j][index])+1)
                not= false;
                break;
            }
        }
         if(not){
                let order = [...template]
                order[food.indexOf(orders[i][2])] = "1"
                order[0] = String(orders[i][1])
                results.push(order)
            }
    }
    results.sort((a,b) => a[0]-b[0])
    return [food,...results]
};