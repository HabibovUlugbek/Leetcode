var countBadPairs = function(nums) {
    let totalPairs = 0
    let goodPairs = 0
    let differencesFreqsMap = {}
    
    for(let i = 0; i < nums.length; i++) {
        const diff = nums[i] - i
        
        totalPairs+=i
        
        if(diff in differencesFreqsMap) {
            goodPairs+= differencesFreqsMap[diff]
            differencesFreqsMap[diff]++
            continue
        }
        
        differencesFreqsMap[diff] = 1
    }
    
    return totalPairs - goodPairs
};