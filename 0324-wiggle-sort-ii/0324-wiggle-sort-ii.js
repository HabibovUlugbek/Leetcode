/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a,b) => b-a);
    
    for(let i=0 ;i<Math.floor(nums.length/2); i++){
        const number = nums.splice(Math.floor(nums.length/2)+i, 1)
       nums.splice(2*i,0,number)
    }
};