/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(n) {
    n = n - 1;
   if(n>=0&&n<26){
       return String.fromCharCode(65+n);
   }
   return convertToTitle(parseInt(n/26)) + convertToTitle((n%26)+1);
};