function threeSumMulti(arr: number[], target: number): number {
    let count = 0;
    let low, high;
    arr = arr.sort((a,b) => a-b);
   for(let i:number=0; i<arr.length-2; i++){ //getting first element
       low=i+1; 
       high=arr.length-1;
       
       while(high>low){
           let sum = arr[i]+arr[low]+arr[high];
        if(sum>target){ 
            high--;
        }else if(sum<target){
            low++;
        } else {
            if(arr[low] !== arr[high]){
                let lowcount = low;
                let highcount = high;
                while(arr[low] === arr[lowcount]){ //counting the same numbers
                    lowcount++
                }
                while(arr[high] === arr[highcount]){
                    highcount--
                }
                count = count + (lowcount-low)*(high-highcount);
                 low = lowcount;
                high = highcount;
            } else {
                count +=(1+high-low)*(high-low)/2
                break;
            }
           
        }
       }
    
   }
   return count% (10**9 + 7)
};