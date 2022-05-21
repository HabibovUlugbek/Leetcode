function triangularSum(nums: number[]): number {
    if(nums.length === 1) return nums[0];
    let newnums = [];
    
    for(let i=0;i<nums.length-1;i++){
        newnums.push((nums[i]+nums[i+1])%10);
    }
    return triangularSum(newnums)
};