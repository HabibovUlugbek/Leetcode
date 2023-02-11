var shortestCompletingWord = function(licensePlate, words) {
    
    var match = {'found':false, 'word':''};
    
    var licensePlateChars = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');
    
    words.forEach(function (word) {
        if (!match.found || word.length < match.word.length) {
            var replaceWord = word.toUpperCase();
            
           
            licensePlateChars.forEach(function (lChar) {
                replaceWord = replaceWord.replace(lChar, '');
            });
            
            
            if (word.length - licensePlateChars.length === replaceWord.length) {
                match.found = true;
                match.word = word
            }
        }
    });
    
    return match.word;
};