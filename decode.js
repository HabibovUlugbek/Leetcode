/**
 * @param {number[]} encoded
 * @para*m {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    let arr = [first];
    for (let i = 0; i<encoded.length; i++){
        first = encoded[i]^first;
        arr.push(first);
    }
    return arr;
};

    

