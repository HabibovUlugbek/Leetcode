
function numMatchingSubseq(s, words) {
    let i = 0;
    let count = 0;

    while (i < words.length) {
        let word = words[i];
        let str = s;
        let isSubSeq = true;
        let j = 0;

        while (j < word.length) {
            let index = str.indexOf(word[j]);

            if (index === -1) {
                isSubSeq = false;
                break;
            }

            str = str.slice(index + 1);
            j++;
        }

        if (isSubSeq) {
            count++;
        }

        i++;
    }

    return count;
}

var numMatchingSubseq = function(s, words) {
    var isSubsequence = function(s, t) {
        let i = 0, j = 0;
        while( j < t.length) {
            if(s[i] === t[j]) {
                i++;
            }
            j++;        
        }
        return i === s.length ? true: false;
    };
    var sum = 0;
    for(let k=0;k<words.length; k++){
        sum = sum + isSubsequence(words[k],s);
    }
    return sum;
};