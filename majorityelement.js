/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    nums = nums.sort((a,b) => a-b)
    console.log(nums)
    var num = nums[0];
    var count = 0;
    var target = nums[0];
    var maxcount = 0;
    for(var i=0; i<nums.length; i++){
        if(num === nums[i]) {
            count++;
            console.log('ishladi')
        }
        else if(count >= maxcount ){
            maxcount = count;
            target = num;
            count = 1;
            num = nums[i]
        }else num = nums[i]
    }
    if(count >= maxcount ){
            target = num;
        }
    return target;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    nums = nums.sort((a,b) => a-b)
    return nums[Math.floor(nums.length/2)]
};