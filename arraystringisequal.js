var arrayStringsAreEqual = function(word1, word2) {
    var word11="" ;
    for (let i = 0; i < word1.length; i++) {
        word11=word11.concat(word1[i]);
    }
    var word22 ="";
    for (let i = 0; i < word2.length; i++) {
       word22= word22.concat(word2[i]);
    }
    return word11 === word22 ? true : false
};
console.log(arrayStringsAreEqual(["a","cb"],["ab","c"]))