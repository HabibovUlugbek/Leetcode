var findMedianSortedArrays = function(nums1, nums2) {
    var points = [...nums1,...nums2];
    points.sort(function(a, b){return b - a});
    points= points.reverse()
    length = points.length
    if(length % 2  ===0 ) {
        return (points[length/2]+points[length/2-1])/2
    }else {
        return points[Math.trunc(length/2)]
    }
};