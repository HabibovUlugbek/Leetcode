var kthLargestNumber = function(nums, k) {
    let arr = [...nums].map(x=>BigInt(x)).sort((a,b)=>a>=b?-1:1);
    return arr[k-1].toString();
};