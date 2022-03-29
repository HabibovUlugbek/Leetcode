function findDuplicate(nums: number[]): number {
    let map = {};
        
        for(let i=0;i<nums.length;i++) {
            if(map[nums[i]]) return nums[i];
            
            map[nums[i]] = true;
        }
    };