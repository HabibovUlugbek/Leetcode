/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let hashtable = {};
    let result = "";
    for(let i=0; i<paths.length; i++){
        for(let j=0; j<paths[i].length; j++){
            if(hashtable[paths[i][j]] ) {
                if(j===0) hashtable[paths[i][j]] += "start";
                if(j===1) hashtable[paths[i][j]] += "end";
            } else {
                if(j===0) hashtable[paths[i][j]] = "start";
                if(j===1) hashtable[paths[i][j]] = "end";
            }
        }
    }
    console.log(hashtable)
    for(let i=0; i<paths.length; i++){
        for(let j=0; j<paths[i].length; j++){
            if(hashtable[paths[i][j]] === "end" ) result = paths[i][j]
               
        }
    }
    return result;
    
};