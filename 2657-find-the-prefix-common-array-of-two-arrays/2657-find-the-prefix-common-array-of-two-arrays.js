/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let C = []
    let count = 0;
    for(let i=0; i<A.length; i++){
        if(A[i] === B[i])count++;
        else {
            if(A.slice(0,i+1).includes(B[i])) count++
            if(B.slice(0,i+1).includes(A[i])) count++
        }
        
        C.push(count)
    }
    
    return C
};