/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let hash = {};
    let len  = items1.length > items2.length ? items1.length :items2.length;
    
    for(let i=0; i<len ; i++){
        if(i<items1.length){
           if(hash[items1[i][0]])hash[items1[i][0]]+=items1[i][1]
            else hash[items1[i][0]]=items1[i][1]
           }
        if(i<items2.length) {
            if(hash[items2[i][0]])hash[items2[i][0]]+=items2[i][1]
            else hash[items2[i][0]]=items2[i][1]
        }
    }
    return Object.entries(hash);
};