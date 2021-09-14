const solution = function (isBadVersion) {
    return function (n) {
      let left = 1
      let right = n
  
      while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
  
        const isMidBad = isBadVersion(mid)
        if (isMidBad) {
          right = mid
        } else {
          left = mid + 1
        }
      }
  
      return left
    }
  }
  