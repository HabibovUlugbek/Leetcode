/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    s = s.split(" ")
    
    for(var i= 0; i<s.length ; i++){
        s[i] = s[i].split('').reverse().join('')
    } 
    s = s.join(' ')
    return s;
};