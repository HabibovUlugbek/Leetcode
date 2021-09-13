var rotate = function(nums, k) {
    var rotatearr= []
    for (let i = 0; i < k; i++) {
       last = nums.pop()
        nums.unshift(last)
    }
    return nums;
};
console.log(rotate(
    [1,2,3,4,5,6,7], 3))

    var rotate = function(nums, k) {
   k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
    
   let reverse = function(i, j){
    while(i < j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    }
   } // suppose  ----->---> 
	reverse(0, nums.length-1); // reverse   <--<------
	 reverse(0, k-1) // reverse first part ---><----
   reverse(k, nums.length-1)// reverse second part --->----->
    
};