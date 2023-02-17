/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let arr = []
    let newArray =words[0].split("")
    for(let i=0 ; i< words.length; i++){
        arr=newArray;
        newArray = []
        let str = words[i]
        for(let j= 0 ; j<arr.length; j++){
            if(str.includes(arr[j])){
                 newArray.push(arr[j])
                str = str.slice(0,str.indexOf(arr[j]))+str.slice(str.indexOf(arr[j])+1)
            }
        }
    }
    return newArray
};