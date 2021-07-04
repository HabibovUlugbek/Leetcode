var createTargetArray = function(nums, index) {
    var word=[]
    for (let i = 0; i < nums.length; i++) {
        word[index[i]]=nums[i]
    }
  
    return word;
    
};

console.log(createTargetArray([1,2,3,4],[0,3,2,1]))