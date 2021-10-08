var numberOfSteps  = function(num) {
    var k=0;
  while(num !== 0) {
    if(num%2 === 0) {

        num = num/2;
        console.log(num)
    }else{
        num = num-1;
    }
    k++
  }  
  return k;
};

console.log(numberOfSteps(14))