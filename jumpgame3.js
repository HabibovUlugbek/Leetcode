/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
 const canReach = (arr, start) => {
  
    const seen = new Set();
    
    const recursive = (index) => {
      if(seen.has(index))
        return false;
      
      if(arr[index] == 0)
        return true;
      
      seen.add(index);
      
      return recursive(index + arr[index]) || recursive(index - arr[index])
    }
    
    return recursive(start)
  };
  
  