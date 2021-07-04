var restoreString = function(s, indices) {
    var word=[], element;
    for (let i = 0; i < s.length; i++) {
        s.split("")
        word[indices[i]]=s[i]
    }
   element =  word.join('')
    return element;
};

console.log(restoreString("hello",[1,3,2,4,5]))