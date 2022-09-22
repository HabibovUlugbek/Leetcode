/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    //edge case - digits lenght smaller than 3
    if(digits.length < 3) return [];
    //edge case - no even number
    let hasEven = false;
    //edge case - all zero
    let allZero = true;
    for(let i = 0; i < digits.length; i++){
        digits[i] % 2 === 0 ? hasEven=true : hasEven;
        digits[i] !== 0 ? allZero=false : allZero;
    }
    if(!hasEven || allZero) return [];
    
    
    
    let hash = {};
    let set = new Set();
    let result = [];
    let first;
    let second;
    let third;
    let num;
    for(let i = 0; i < digits.length; i++){
        if(digits[i] %2 === 0){
            third = digits[i];
            for(let j = 0; j < digits.length; j++){
                if(j !== i && digits[j] !== 0) {
                    first = digits[j];
                    for(let k = 0; k < digits.length; k++){
                        if(j!==i && j!==k && k!==i) {
                            second = digits[k];
                            let num1 = first.toString();
                            let num2 = second.toString();
                            let num3 = third.toString();
                            let numString = num1.concat(num2, num3)
                            num = parseInt(numString);
                            set.add(num);
                        }
                    }
                }
            }
        }
    } 
    set.forEach(n=>result.push(n));
    result.sort((a,b)=>a-b);
    return result;
};