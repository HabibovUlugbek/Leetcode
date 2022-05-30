function repeatedNTimes(nums: number[]): number {
let hashtable = {};
    for(let i=0 ;i<nums.length; i++){
        if(hashtable[nums[i]]) hashtable[nums[i]]++
        else hashtable[nums[i]] = 1 ;
    }
    for(let i=0 ;i<nums.length; i++){
        if(hashtable[nums[i]] === nums.length/2) return nums[i] 
    }
};