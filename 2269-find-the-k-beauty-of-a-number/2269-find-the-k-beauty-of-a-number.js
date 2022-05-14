/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(nums, k) {
    let num = nums.toString()
    var count = 0;
    let i=0;
   while(i+k <= num.split("").length){
    let number = parseInt(num.toString().slice(i,i+k));
       if(nums % number == 0) {
           count ++
       }
       i++
   }
    return count;
};