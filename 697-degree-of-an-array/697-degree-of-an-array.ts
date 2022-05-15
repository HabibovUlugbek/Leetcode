function findShortestSubArray(nums: number[]): number {
    let hashMap = {}, freq = 0, min = Infinity
    for(let i=0; i<nums.length; i++){
        if(hashMap[nums[i]] == undefined)
            hashMap[nums[i]] = [i]
        else
            hashMap[nums[i]].push(i)
        freq = Math.max(freq, hashMap[nums[i]].length)
    }
    
    for(let key in hashMap){
        let elementIndexes = hashMap[key]
        if(elementIndexes.length == freq){
            let total = elementIndexes[elementIndexes.length-1] - elementIndexes[0] + 1
            min = Math.min(total, min)
        }
    }
    return min

};