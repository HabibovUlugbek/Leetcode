var productExceptSelf = function(nums) {
    let left = Array(nums.length);
    let right = Array(nums.length);
    let result = Array(nums.length);
    
    let product = 1;
    left[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        product *= nums[i-1];
        left[i] = product;
    }
    
    product = 1;    
    right[nums.length - 1] = 1;
    result[nums.length - 1] = left[nums.length - 1];
    for(let i = nums.length - 2; i >= 0; i--) {
        product *= nums[i+1];
        right[i] = product;
        result[i] = left[i] * right[i];
    }
    
    return result;
};