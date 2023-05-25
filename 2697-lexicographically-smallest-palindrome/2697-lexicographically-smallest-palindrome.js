/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    s = s.split("")
    let last = s.length-1;
    let first = 0;
    while(last>first){
          if(s[last] !== s[first]) {
             if(s[last]>s[first]){
                 s[last]=s[first]
             }else s[first]=s[last]
          }
           last--;
           first++;
    }
    return s.join("")
};