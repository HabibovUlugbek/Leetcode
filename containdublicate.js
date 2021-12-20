/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    for(var  i=0 ; i< nums.length ; i++){
        for(var  j=i+1 ; j< nums.length ; j++){
            if(nums[i] === nums[j]) return true
        }
    }
    return false
};

var containsDuplicate = function(nums) {
    const obj = {};
    for (const num of nums) {
       if (!obj[num]) {
           obj[num] = 1;
       } else {
           return true;
       }
    }

    return false;
};