

var smallerNumbersThanCurrent = function(nums) {
    let smaller = [];
    for (let i = 0; i < nums.length; i++){
        a=nums[i]
        let k=0
        for (let j = 0; j < nums.length; j++){
            if(a>nums[j]){
                k++
            }
        }
        smaller.push(k)
    }
    return smaller
};

console.log(smallerNumbersThanCurrent([6,5,4,8]))