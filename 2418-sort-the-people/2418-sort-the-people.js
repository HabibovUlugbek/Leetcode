/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let hash = {}
    for(let i=0 ; i<names.length ; i++){
        hash[i] = [names[i], heights[i]];
    }
    let values = Object.values(hash);
    values = values.sort((a,b) => b[1] - a[1]);
    values = values.map(x => x[0]);
    return values;
};