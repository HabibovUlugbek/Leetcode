/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    let hash = {}
    for(let i=0 ; i<words.length ; i++){
        let diff = ""
        for(let j=0; j<words[i].length-1 ; j++ ){
            diff = diff + "." + String(words[i].charCodeAt(j+1)- words[i].charCodeAt(j))
        }
        if(hash[diff]) hash[diff].push(i)
        else hash[diff]=  [i]
    }
   for (const [key, value] of Object.entries(hash)) {
    if(value.length ===1) return words[value[0]]
}
};