/**
 * @param {number} num
 * @return {number}
 */
 var largestInteger = function(num) {
    let arr = num.toString().split("");
for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]<arr[j] &&((arr[i]%2 !==0 && arr[j]%2 !==0) ||(arr[i]%2 ===0 && arr[j]%2 ==0))){
           let num = arr[i];
        arr[i] = arr[j];
        arr[j] = num
           }
    }
}
return Number(arr.join(''));
};