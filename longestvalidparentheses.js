/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0;
  let saved = {};

  for (let i = 0; i < s.length; i++) {
    const pairI = i - (saved[i - 1] || 0) - 1;

    if (s[i] === ')' && s[pairI] === '(') {
      saved[i] = 2 + (saved[i - 1] || 0) + (saved[pairI - 1] || 0);
      if (saved[i] > max) {
        max = saved[i];
      }
    }
  }

  return max;
};
// Just has error i don;t mow why maybe ha s a error in problem decrption
function longestValidParentheses(s: string): number {
let arr = s.split("");
    if(s.length ===0) return 0;
    let count = 0;
    let open=0;
    let close = 0;
    for(let i=0 ; i<arr.length; i++){
        if(s[i] === "(") open++;
        if(s[i] === ")" && open > 0) close++;
        if( close >= open) {
            count += open*2;
            open = 0 ;
            close = 0;
        };
    }
    if(open >0 && close >0){
    count +=close *2;
    }
    return count
};
