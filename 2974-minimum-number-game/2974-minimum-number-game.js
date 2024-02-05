/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = nums.sort((a,b) => a-b);
    for(let i=0;i<nums.length-1; i=i+2){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    
    return arr;
};