/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    let str = '';
    for(let i=0; i<s.length; i++) {
        str += s[i].charCodeAt() - 96;
    }
    let res = 0;
    let arr = [];
    for(let i=0; i<k; i++) {
        res = 0;
        for(let j=0; j<str.length; j++) {
            res  += parseInt(str[j]);
        }
        str = res.toString();
        arr.push(res);
    }
    return parseInt(arr[arr.length-1]);
};