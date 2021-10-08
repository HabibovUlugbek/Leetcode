/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    s = s.split(" ")
     var str = []
     console.log(s)
     for(var i=0 ; i<s.length;i++){
         
         str[s[i].slice(-1)-1] = s[i].slice(0,s[i].length-1).trim()
     }
     console.log(str)
     return str.join(" ")
 };