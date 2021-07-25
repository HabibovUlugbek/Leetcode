var longestCommonPrefix = function (strs) {
 
    let lcp = '';
    if (!strs || !strs.length) return lcp;
    
    // sortlash
    strs.sort()
    
    for (let i = 0; i < strs[0].length; ++i) {
        console.log(strs[strs.length - 1][i])
      if (strs[0][i] !== strs[strs.length - 1][i]) {    // 
        break;
      } else {
        //   console.log(lcp)
        lcp += strs[0][i];
      }
    }
    return lcp;
  };
console.log(longestCommonPrefix(["flower","flow","reflight"]))