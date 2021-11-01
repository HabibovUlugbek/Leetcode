/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    var arr = [];
    s = s.split("");
    for(var i=0 ; i<s.length; i++){
        if(s[i]==='a'||s[i]==='e'||s[i]==='i'||s[i]==='o'||s[i]==='u'||s[i]==='A'||s[i]==='E'||s[i]==='I'||s[i]==='O'||s[i]==='U'){
            arr.unshift(s[i])
            s[i]='*';
        }
    }
    
    for(var i=0 ; i<s.length; i++){
        if(s[i]==='*'){
            var vowel = arr.shift()
            s[i]=vowel;
        }
    }
    s = s.join('');
    return s;
  
};