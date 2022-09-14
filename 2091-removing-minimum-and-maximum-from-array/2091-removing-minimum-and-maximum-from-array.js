/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const len = nums.length;
    // find min and max index in array
    let minIndex = nums.indexOf(Math.min(...nums));
    let maxIndex = nums.indexOf(Math.max(...nums));
    // ensure that min is the lower one
    if (minIndex > maxIndex) [minIndex, maxIndex] = [maxIndex, minIndex];
    // option 1 remove both ends
    let both = (len - maxIndex) + (minIndex + 1);
    // option 2, just the right
    let right = len - minIndex;
    // option 3 just the left
    let left = maxIndex + 1;
    return Math.min(both, right, left);
};