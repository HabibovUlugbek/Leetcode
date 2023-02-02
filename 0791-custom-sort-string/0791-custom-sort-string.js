/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let str = "";
    for(let i=0 ; i<order.length; i++){
        if(s.includes(order.charAt(i))){
            str+=order.charAt(i);
            s = s.replace(order.charAt(i),"");
            i--;
        }
    }
    return str+s;
};