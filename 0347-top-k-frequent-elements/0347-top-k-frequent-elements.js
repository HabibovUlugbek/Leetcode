/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    for(let i=0; i<nums.length;i++) {
        if(hash[nums[i]]){
            hash[nums[i]]++;
        } else hash[nums[i]] = 1;
    }
    let arr = []
    hash = Object.entries(hash)
    for (const [key, value] of hash) {
            arr.push([key, value])
        }
    arr.sort((a,b) => b[1] - a[1]);
    let result = []
    let i= 0;
    while(i<= k-1){
        result.push(arr[i][0]);
        i++;
    }
    return result;
};