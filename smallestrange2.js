var smallestRangeII = function(nums, k) {
    
    nums = nums.sort(function any(a,b){ return a-b});
    
    
    
    let len = nums.length
    
    let lowestarr = nums[0]
    let highestarr = nums[len-1]
    
    let res = highestarr - lowestarr 

    for(let i=0; i<len-1; i++){
            
        let min = Math.min( lowestarr+k, nums[i+1]-k )
        let max = Math.max( highestarr-k, nums[i]+k )

        res = Math.min(max-min, res)            
    
    }

    return res

};