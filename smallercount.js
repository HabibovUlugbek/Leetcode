var countSmaller = function(nums) {
    if (nums.length === 0) return [];
    
    let counts = [0];
    let orderedNums = [nums[nums.length-1]];
    
    const bs = (target) => {
        let start = 0;
        let end = orderedNums.length;
        while (start < end) {
            let mid = Math.floor((start+end)/2);
            if (target > orderedNums[mid]) start = mid+1;
            else end = mid;
        }
        orderedNums.splice(start, 0, target);
        return start;
    }
    
    for (let i = nums.length-2; i>=0; i--){
        let count = bs(nums[i]);
        counts.unshift(count);
   }
    return counts;
};