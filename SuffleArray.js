var shuffle = function(nums, n) {
    let a = [] , b= [];
    for (let i = 0; i < nums.length; i++) {
        if(i<n) {
            a.push(nums[i])
        }else {
            b.push(nums[i])
        }
    }
    console.log(a)
    console.log(b)
    num = []
    for (let i = 0; i < nums.length / 2; i++){
       num.push(a[i]);
       num.push(b[i])   
    }
    return num;
};

console.log(shuffle([1,2,3,4,5,6], 3))