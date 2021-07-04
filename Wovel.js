var maxVowels = function(s, k) { 
  var count = 0;
  var max= 0;
  var str;
  for (let j = 0; j < s.length -k +1; j++) {
      count=0;
      str = s.slice(j,j+k)
      
      str = str.split("")
      for (let i = 0; i < str.length; i++) {
         
          if(str[i] === 'a' || str[i]==='i' || str[i] === 'u' || str[i]==='e' || str[i] ==="o"){
            count++
          } 
      }
      if(max <= count) {
        max = count
      }
    }
  return max;
};

console.log(maxVowels("weallloveyou",7))