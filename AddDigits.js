var addDigits = function(num) {
  while(num.toString().length >= 2) {
      let str = num.toString()
      let currentSum = 0
      
      for(const digit of str) {
          currentSum += Number(digit)    
      }
      
      num = currentSum
  }
  
  return num
};

console.log(addDigits(38))