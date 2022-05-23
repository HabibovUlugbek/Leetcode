/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    const nums1Copy = nums1.slice(0, m);
    let counter = 0;
    
    while(counter < n){
        if(nums1[m] === 0){
            nums1[m++] = nums2[counter++];
        }
    }
    return nums1.sort((a,b) => a-b)
};