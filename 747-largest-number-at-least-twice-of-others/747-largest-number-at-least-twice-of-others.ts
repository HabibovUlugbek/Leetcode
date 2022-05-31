function dominantIndex(nums: number[]): number {
    if(nums.length === 1) return 0 ;
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    
    for(let i=0 ; i<nums.length; i++) {
        if( i !== index && nums[i]*2 >max) return -1;
    }
    
    return index
};