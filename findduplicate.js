/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    var arr = [];
    for(var i=0; i<nums.length; i++){
        if (arr[nums[i]]) {
            arr[nums[i]] += 1
        } else {
            arr[nums[i]] = 1
        }
    }
    
    let a = [];
    arr.forEach(function (item, index) {
        if (item == 2) {
            a.push(index)
        }
    })
    return a;
};