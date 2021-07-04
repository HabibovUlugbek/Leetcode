var areSentencesSimilar = function(sentence1, sentence2) {
    if(sentence2.length > sentence1.length && sentence1.split(" ").length > 1) {
       var  x=sentence1
        sentence1 = sentence2
        sentence2 = x
    }
     sentence2 = sentence2.split(" ")
    var k= true
        for (let j = 0; j < sentence2.length; j++) {
           k = k && sentence1.includes(sentence2[j])
    }
    return k;
};

console.log(areSentencesSimilar("My name is Haley", "My Haley"))