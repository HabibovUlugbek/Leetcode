/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let odd = nums.filter((n) => n%2==1);
    let even = nums.filter((n) => n%2==0);
    let arr = [];
    while(even.length > 0 || odd.length > 0){
        arr.push(even.pop());
        arr.push(odd.pop());
    }
    return arr;
};