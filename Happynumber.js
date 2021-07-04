var isHappy = function(num) {
    while(num.toString().length > 1) {
        let str = num.toString()
        let currentSum = 0
        
        for(const digit of str) {
            currentSum += Math.pow(Number(digit),2)    
        }
        
        num = currentSum
        console.log(currentSum)
    }
    if (num === 1) {
        return true
    }else return false
  };
  

  console.log(isHappy(7))