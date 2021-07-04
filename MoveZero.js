var moveZeroes = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0){
            nums.splice(i,1);
            console.log(nums)
            nums.push(0);
        }
    }
   
    return nums;
};
console.log(moveZeroes([0,1,0]));