/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
       let abcd = 'abcdefghijklmnopqrstuvwxyz'
    let output = ''
    while(s.length > 0){
       for(let i = 0; i < abcd.length; i++){
          if(s.indexOf(abcd[i]) >= 0){
            output += abcd[i]
            s = s.slice(0, s.indexOf(abcd[i])) + s.slice(s.indexOf(abcd[i]) + 1)
          }
       }
       if(s.length === 0) return output
       for(let i = abcd.length - 1; i >= 0 ; i--){
         if(s.indexOf(abcd[i]) >= 0){
           output += abcd[i]
           s = s.slice(0, s.indexOf(abcd[i])) + s.slice(s.indexOf(abcd[i]) + 1)
         }
      }
    }
    return output 
};