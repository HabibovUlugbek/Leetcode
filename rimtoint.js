var romanToInt = function(s) {
    var rim = s;
    arrayrim = rim.split("")
    console.log(arrayrim)
    var sum = 0;
    for (let i = 0; i < arrayrim.length; i++) {
        console.log(sum)
        if(arrayrim[i] === 'I'){
           if(i !== arrayrim.length -1){
            if(arrayrim[i+1] !== 'I'){
                sum =sum-1
            }else sum=sum+1
           }else sum=sum+1
        }    
        if(arrayrim[i] === 'V'){
            if(i !== arrayrim.length -1){
             if(arrayrim[i+1] !== 'V' && arrayrim[i+1] !== 'I' ){
                 sum =sum-5
             }else sum=sum+5
            }else sum=sum+5
         } 
         if(arrayrim[i] === 'X'){
            if(i !== arrayrim.length -1){
             if(arrayrim[i+1] !== 'X' && arrayrim[i+1] !== 'I' && arrayrim[i+1] !== 'V' ){
                 sum =sum-10
             }else sum=sum+10
            }else sum=sum+10
         } 
         if(arrayrim[i] === 'L'){
             console.log("yapti")
            if(i !== arrayrim.length -1){
                console.log(arrayrim[i+1])
             if(arrayrim[i+1] !== 'L' &&  arrayrim[i+1] !== 'X' && arrayrim[i+1] !== 'I' && arrayrim[i+1] !== 'V'){
                 sum =sum-50
                 console.log("yapti")
             }else sum=sum+50
            }else sum=sum+50
         }    
         if(arrayrim[i] === 'C'){
             if(i !== arrayrim.length -1){
              if(arrayrim[i+1] !== 'C' && arrayrim[i+1] !== 'L' &&  arrayrim[i+1] !== 'X' && arrayrim[i+1] !== 'I' && arrayrim[i+1] !== 'V' ){
                  sum =sum-100

              }else sum=sum+100
             }else sum=sum+100
          } 
          if(arrayrim[i] === 'D'){
             if(i !== arrayrim.length -1){
              if(arrayrim[i+1] !== 'D' && arrayrim[i+1] !== 'C' && arrayrim[i+1] !== 'L' &&  arrayrim[i+1] !== 'X' && arrayrim[i+1] !== 'I' && arrayrim[i+1] !== 'V' ){
                  sum =sum-500

              }else sum=sum+500
             }else sum=sum+500
          }  
          if(arrayrim[i] === 'M')   sum= sum+1000
    }

    return sum;
};


console.log(romanToInt("LVIII"))