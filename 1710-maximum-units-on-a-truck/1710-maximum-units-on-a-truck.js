/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1]- a[1]);
    let count = 0;
    for(let i=0 ; i<boxTypes.length; i++){
        if(truckSize>boxTypes[i][0]){
            truckSize -=boxTypes[i][0]
            count +=boxTypes[i][0]*boxTypes[i][1]
        } else {
            count+=boxTypes[i][1]*truckSize
            return count;
        }
    }
    return count
};