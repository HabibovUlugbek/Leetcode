var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0; i < nums.length && nums.length !==1; i++) {
        for (let j = i + 1; j - i <= k; j++) {
            if(Math.abs(nums[i]-nums[j])<=t){
                return true ;
            }       
        }
    }
    return false
};