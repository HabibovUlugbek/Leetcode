function sumOfUnique(nums: number[]): number {
    let hashtable = {} ;
    for(let i=0 ; i<nums.length; i++){
        if(hashtable[nums[i]]) hashtable[nums[i]]++
        else hashtable[nums[i]] =1
    }
    let sum = 0;
    for(let i=0 ; i<nums.length; i++){
       if(hashtable[nums[i]] === 1) sum +=nums[i]
    }
    return sum;
};