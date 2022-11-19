const findMedianSortedArrays = (nums1, nums2) => {
    const len = nums1.length + nums2.length;
	// For even number of elements: [4,5] [6,7], we have len = 4.
	// 4/2+1 | 0. 4/2 + 1 = 3; 3 | 0 == 3
	// For odd number of elements: [1,2] [4], len = 3
	// 3/2 + 1 = 2.5. 2.5 | 0 == 2. 
    const mid = len / 2 + 1 | 0;
	
    let i = 0, j = 0, k = 0, last, beforeLast;
    while (i++ < mid) {
        beforeLast = last;
        last = nums1[j] < (nums2[k]??Infinity) ? nums1[j++] : nums2[k++];
    }
    return len % 2 === 1 ? last : (last + beforeLast) / 2;
};