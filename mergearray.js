var merge = function(nums1, m, nums2, n) {
    var num = [];
    num = nums1.slice(0,m)
    num = [...num,...nums2]
    
    return num.sort(function(a, b){return a - b});

};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))