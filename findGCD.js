/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    nums.sort((a,b) => a-b)
    var k;
    for(var i=1; i<=nums[0]; i++){
        if(nums[0]%i === 0 && nums[nums.length-1]%i ===0) k=i;
    }
    return k;
};