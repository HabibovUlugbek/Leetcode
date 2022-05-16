function largestNumber(nums) {
    nums.sort((a, b) => {
        a = a.toString();
        b = b.toString();
        return (b+a) - (a+b);
    })
    return nums[0] == '0' ? '0' : nums.join('');
};