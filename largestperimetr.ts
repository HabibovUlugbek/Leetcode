function largestPerimeter(nums: number[]): number {
    nums = nums.sort((a,b) => a-b);
    let i=nums.length-1;
    while(nums[i]>=nums[i-1]+nums[i-2]){
        if(i === 2 &&nums[i]>=nums[i-1]+nums[i-2]) return 0;
        i--;
  }
    return nums[i]+nums[i-1]+nums[i-2];
};