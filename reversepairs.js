/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function(nums) {
    var k=0;
  for(var i=0;i<nums.length-1; i++){
    for(var j=i+1; j<nums.length;j++){
        if(nums[i]>2*nums[j]) k++;
    }
  }  
    return k;
};