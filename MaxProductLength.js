var maxProduct = function(words) {
    
    var num=[] , word , boolean =false;
    for (let i = 0; i < words.length; i++) {
        word = words[i].split("")
            
        for (let j = 0; j < words.length; j++) {
            boolean =false
           for (let p = 0; p < word.length; p++) {

             boolean = boolean || words[j].includes(word[p])  
           }

           if(!boolean) {
               num.push(words[i].length * words[j].length)
           }
        }
        
    }
    console.log(num)
    return num.length ? Math.max(...num) : 0
};

console.log(maxProduct(["eae","ea","aaf","bda","fcf","dc","ac","ce","cefde","dabae"]))