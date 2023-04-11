/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let letters = []
    s=s.split("")
    let regex = /[A-Za-z]/g
    for(let i=0 ; i< s.length; i++){
        if(s[i].match(regex)) letters.push(s[i])
    }
    
    for(let i=0 ; i< s.length; i++){
        if(s[i].match(regex)) {
            let char = letters.pop()
            s[i] = char
        }
    }
    return s.join("")
};