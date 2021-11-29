const find132pattern = (nums) => {
    let n = nums.length;
    let i = j = k = 0;
    for (; i < n; i = j + 1) {
        while (i < n - 1 && nums[i] >= nums[i + 1]) i++;
        j = i + 1;
        while (j < n - 1 && nums[j] <= nums[j + 1]) j++;
        k = j + 1;
        while (k < n) {
            if (nums[i] < nums[k] && nums[k] < nums[j]) return 1;
            k++;
        }
    }
    return 0;
};