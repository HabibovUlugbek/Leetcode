/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    let min = Infinity
    for(let i=0 ; i<nums1.length; i++){
        if(nums2.includes(nums1[i]) && min > nums1[i]) min = nums1[i] 
        if(min !==Infinity && i === nums1.length -1 ) return min
    }
   
    let min1 = Math.min(...nums1)
    let min2 = Math.min(...nums2);
    return [min1,min2].sort((a,b) =>a-b).join("")
};