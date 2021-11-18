/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    var arr=[];
    for(var i=1; i<=nums.length;i++){
        arr.push(i)
    }
    for(var i=0; i<nums.length;i++){
        const index = arr.indexOf(nums[i]);
        if (index > -1) {
          arr.splice(index, 1);
        }
    }
    
    return arr;
};