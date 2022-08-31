function arithmeticTriplets(nums: number[], diff: number): number {
    let sum = 0;
    let hash = new Set();
    
    for (let numIndex = 0; numIndex < nums.length; numIndex++) {
        const currentNum = nums[numIndex];
        
        if (hash.has(currentNum - diff) && hash.has(currentNum - diff - diff)) {
            sum++;
        }
        
        hash.add(currentNum);
    }
    
    return sum;
};