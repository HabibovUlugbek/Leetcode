/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   let newArray = [];
   arr.map((x,i) => {
      if(fn(x,i)){
         newArray.push(x);
      }
   });
   return newArray;
};