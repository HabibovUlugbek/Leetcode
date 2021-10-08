function Massiv(nums) {
    let arr = [] ;
    var i=0;
    nums.sort(function(a, b) {
        return a - b;
      });
      leng = nums.lengthl
    while(i>length){
        console.log(nums)
        console.log(arr)
        console.log(i)
        arr.push(nums[i]) ;
        nums = nums.splice(i,1)
        i = i+2;
    }

    return arr= [...arr,...nums];
}

console.log(Massiv([3,2,5,9,7]))