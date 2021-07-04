var decompressRLElist = function(nums) {
    var numbers=[];
    for (let i = 0; i < nums.length; i=i+2) {
        for (let j = 0; j < nums[i]; j++) {
            numbers.push(nums[i+1])
        }
        
    }
    return numbers;
};

console.log(decompressRLElist([1,2,3,4]))