function firstPalindrome(words: string[]): string {
for(let i=0; i<words.length; i++){
    if(isPalindrome(words[i])) return words[i]
}
    return "";
};

 var isPalindrome = function(input) {
    input = input.toLowerCase()
    var start = 0
    var end = input.length - 1
    while (start < end) {
        var s = input.charCodeAt(start)
        var e = input.charCodeAt(end)
    
        if (!isLetter(s)) {
            start++
            continue
        }
        if (!isLetter(e)) {
            end--
            continue
        }
    
        if ((s) !== (e)) {
            return false 
        } 
        start++
        end--
  }
  return true
};

var isLetter = function(code) {
    if (((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}