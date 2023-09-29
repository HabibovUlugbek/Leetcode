var isMonotonic = function(nums) {
    if(nums.length<=2){
        return true;
    }
   
    let trend =0;
    for(let i=1; i<nums.length; i++){
        if(nums[i]!=nums[i-1] && trend == 0){
            if(nums[i]>nums[i-1]){
                trend =1
            }
            else{
                trend =-1;
            }
        }
        else{
            if(nums[i]==nums[i-1]){
                continue;
            }
            if(trend==1){
                if(nums[i]<nums[i-1]){
                    return false;
                }
            }
            else{
                if(nums[i]>nums[i-1]){
                    return false;
                }
            }
        }
    }
    return true;
};