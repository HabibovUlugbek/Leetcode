/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    var arr=[]
    for(let i= 0 ; i<=n ; i++){
        let str = i.toString(2)
        let num= str.split("1").length-1
        console.log(str)
        arr.push(num)
    }
    
    return arr;
};