/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(A) {
     let sumarr = A.reduce((curr, prev) => prev+=curr)
        let nodup = [...new Set(A)].reduce((curr, prev) => prev+=curr)
        
        return nodup*2-sumarr
};