function findClosestNumber(nums: number[]): number {
let result = Infinity;
    for(let i=0; i<nums.length ;i++){
        if(Math.abs(result-0) > Math.abs(0-nums[i])) {
            result = nums[i];
        } else if(Math.abs(result-0) === Math.abs(0-nums[i])) {
            result = result > nums[i] ? result : nums[i];
        }
    }
    return result;
};