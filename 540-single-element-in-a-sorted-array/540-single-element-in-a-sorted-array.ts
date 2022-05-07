function singleNonDuplicate(nums: number[]): number {
let count = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=0;j<nums.length; j++){
            if(nums[i] === nums[j] && j !==i) count++
        }
        if(count === 0) return nums[i];
        count = 0;
    }
};