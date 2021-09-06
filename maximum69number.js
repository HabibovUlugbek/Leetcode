/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    num= num.toString().split("")
     for(var i=0; i< num.length ; i++){
         if(num[i]==6) {
             num[i]= 9 ; 
                        
             return num.join("")}
     }
     return num.join("")
    // return num.toString().replace("6","9")
     
 };