/**
 * @param {string} S
 * @return {string[]}
 */
 var letterCasePermutation = function(str) {
    
    result=[];
    letterCasePermutationsHelper(str, 0, "", result);
    return result;
    function letterCasePermutationsHelper(str, i, plate, result){
      if(i === str.length) {
        result.push(plate);
        return;
      }
      if(str[i] >= 0 && str[i]<=9) {
        letterCasePermutationsHelper(str, i+1, plate+str[i], result);
      }
      else {
        letterCasePermutationsHelper(str, i+1, plate+str[i].toUpperCase(), result);
        letterCasePermutationsHelper(str, i+1, plate+str[i].toLowerCase(), result);
      }
    }
};