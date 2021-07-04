var thirdMax = function(nums) {
  var num = [...nums]
  if(nums.length <3) return Math.max(...nums)
    for (let i = 0; i < 3; i++) {
    Max = Math.max(...nums) 
    console.log(i , Max, nums)
    if(i === 2) {
      console.log("ishladi")
      console.log(nums)
      if(nums.length === 0) return Math.max(...num)
      continue
    } ;
    nums = nums.filter(el =>  el!== Max)    
    }
    Max = Math.max(...nums)
    return nums.length === 0 ? Math.max(...nums) : Max;  
};

console.log(thirdMax([3,2,1]))