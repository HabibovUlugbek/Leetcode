/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets = function(arr, a, b, c) {
    var l=0;
    for(var i=0; i<arr.length;i++){
        for(var j=i+1; j<arr.length;j++){
            for(var k=j+1; k<arr.length;k++){
                if(Math.abs(arr[i]-arr[j])<=a && Math.abs(arr[i]-arr[k])<=c && Math.abs(arr[j]-arr[k])<=b) {
                    l++;
                 continue;                                                                                  }
            }
        }
    }
    return l;
};