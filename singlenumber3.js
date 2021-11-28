/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    var arr = []
   for(var i=0; i<nums.length;i++){
       if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) arr.push(nums[i]);
   }
   return arr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function singleNumber(nums) {
    const map = {};
    var arr =[]
    for (let n of nums) {
      if (map[n] == null) map[n] = 0;
      map[n]++;
    }
  
    for (let n in map) {
      if (map[n] === 1) arr.push(Number(n));
    }
    return arr;
  }