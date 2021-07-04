var smallestRangeII = function(A, K) {
    var MAX = Math.max(...A)
    var MIN = Math.min(...A)
    var arr = [];
    var x;
    var Middle = parseInt((MAX+MIN)/2)
    console.log(Middle)
    for (let i = 0; i < A.length; i++) {
       if(Middle > A[i]){
           x=A[i]+K
           arr.push(x)
       }if (Middle === A[i]) {
           
       } else {
        x=A[i]-K
        arr.push(x)
       }
    }
    console.log(arr)
    return Math.max(...arr) - Math.min(...arr);
};

console.log(smallestRangeII([7,8,8],5))