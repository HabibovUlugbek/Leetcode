var arraySign = function(nums) {
    var k= 1;
    nums.forEach(element => {
        if(element>0) k=k*1;
    else if(element<0)  k=k*(-1);
    else if(element===0) k=0
    });
    return k;
    
};