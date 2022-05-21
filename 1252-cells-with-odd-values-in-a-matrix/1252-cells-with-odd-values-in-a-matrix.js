/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let myArray= [];
    let oddValueCounter = 0;
    
    for (let i = 0; i < m; i++) {
         myArray.push(new Array(n).fill(0));   
    }
    
   for (let i = 0; i < indices.length; i++) {
       let rowIndex = indices[i][0];
       let columnIndex = indices[i][1];
       
       for(let i = 0; i < n; i++) {
           myArray[rowIndex][i] += 1;
       }
       
       for(let i = 0; i < m; i++) {
           myArray[i][columnIndex] += 1;
       }
   } 
    
    for (let i = 0; i < m; i++) {
        for (let j= 0; j < n; j++) {
            if (myArray[i][j] % 2 == 1) {
                oddValueCounter++;
            }
        }
    }
    
    return oddValueCounter;
};