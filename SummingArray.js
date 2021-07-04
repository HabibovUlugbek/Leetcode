 var runningSum = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if(i===0){
            nums[i]=nums[i]
        }else {
            nums[i]=nums[i]+nums[i-1];
        } 
       
    }
    return nums;
};