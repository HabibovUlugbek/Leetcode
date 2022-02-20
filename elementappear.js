/**
 * @param {number[]} arr
 * @return {number}
 */
 var findSpecialInteger = function(arr) {
    var index = 0;
    var len=0;
    var num=0;
    while(index<arr.length){
       len =arr.lastIndexOf(arr[index]) -arr.indexOf(arr[index])+1;
        if(arr.length/len<=4)num=arr[index];
        index=arr.lastIndexOf(arr[index])+1
    }
    return num;
};