function repeatedNTimes(nums: number[]): number {
    let hashtable = {};
    for(let i=0 ;i<nums.length; i++){
        if(hashtable[nums[i]])  return nums[i];
        else hashtable[nums[i]] = 1 ;
    }
};