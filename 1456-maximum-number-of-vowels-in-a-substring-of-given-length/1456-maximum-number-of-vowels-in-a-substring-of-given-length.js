/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) { 
  let vowel = ['a','i','u','e',"o"]
  let result= 0; 
  let count = 0;
  
  for (let i = 0; i < k; i++) {
      if(vowel.includes(s[i]))++count
  }
    // console.log(count)
  for (let j = 0; j <= s.length -k; j++) {
      
      if(j !== 0) {
          if(vowel.includes(s[j-1]))--count
          if(vowel.includes(s[j+k-1]))++count
          // console.log(j,s[j-1],s[j+k-1], count )
          
      }
      result = Math.max(result, count)
      if(result === k) return result
    }
  return result;
};
