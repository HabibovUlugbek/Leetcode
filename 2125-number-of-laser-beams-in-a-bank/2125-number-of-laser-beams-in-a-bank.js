/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let count = 0;
    let last =0;
    for(let i=0;i<bank.length; i++){
        let row = bank[i].split("0").join("").length;
        if(row > 0) {
            count = count + last *row;
            last = row;
        }
    }
    return count
};