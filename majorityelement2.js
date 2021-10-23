var majorityElement = function(nums) {
    let i = 0
    let len = nums.length
    let temp = {}
    let res = []
    while(i < len) {
     temp[nums[i]] = (temp[nums[i]] || 0) +1
     if(temp[nums[i]] > Math.floor(nums.length /3) && !res.includes(nums[i])) res.push(nums[i])
    i++
    }
        return res
};