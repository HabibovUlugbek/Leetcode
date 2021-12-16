/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    var arr = []
    for(var i=0 ; i<index.length; i++){
        arr.splice(index[i],0,nums[i])
    }
    return arr;
};