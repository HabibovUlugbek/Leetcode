var reverseWords = function(s) {
    s= s.trim().split(' ')
    var reverseword =[];

    for (let i = s.length-1; i >=0; i--) {
        if(s[i] !== '' || s[i] !== '') {
            reverseword.push(s[i])
        }
        
    }
    return reverseword.join(' ');
};