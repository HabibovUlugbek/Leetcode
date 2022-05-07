var findClosestElements = function(arr, k, x) {
    
    let left = 0;
    let right = arr.length - k;
    const result = []
    
    while(left < right){
        
        const mid = Math.floor(left + (right-left) /2);
        
        
        if(arr[mid + k] - x  < x - arr[mid]){
            left = mid + 1;
           
        }else{
            right = mid;
        }
        
    }
    
    
    for(let i=left; i < left+k; i++){
        result.push(arr[i])
    }
    
    
    return result;
};