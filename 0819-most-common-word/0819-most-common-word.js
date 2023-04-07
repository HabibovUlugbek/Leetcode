/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const regex = /\b\w+\b/g;
    paragraph = paragraph.toLowerCase().replace(/[.;,:!?]/g, ' ').match(regex);
    let hash = {}
    for(let i=0; i<paragraph.length; i++){
        if(hash[paragraph[i]])hash[paragraph[i]]++
        else hash[paragraph[i]]=1;
    }
    
    let values = Object.entries(hash)
    values.sort((a,b) => b[1]-a[1])
    for(let i=0; i<values.length; i++){
        if(!banned.includes(values[i][0])) return values[i][0]
    }
    return ""
};