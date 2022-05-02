/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let odd = [];
    let even  = [] ;
    for (let i=0; i<nums.length; i++) {
        if(i%2 === 0) even.push(nums[i])
        else odd.push(nums[i]);
    }
    odd= odd.sort((a,b) => b-a);
    even = even.sort((a,b) => a-b); 
    for (let i=0; i<nums.length; i++) {
        if(i%2 === 0) { let shift = even.shift();
            nums[i] = shift
        }else {
            let shift = odd.shift();
            nums[i] = shift
        }
        
    }
    return nums
};