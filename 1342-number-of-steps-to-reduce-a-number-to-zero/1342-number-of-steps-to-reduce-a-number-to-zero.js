/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    var k=0;
  while(num !== 0) {
    if(num%2 === 0) {

        num = num/2;
    }else{
        num = num-1;
    }
    k++
  }  
  return k;
};
