function singleNumber(nums) {
    const map = {};
    for (let n of nums) {
      if (map[n] == null) map[n] = 0;
      map[n]++;
    }
  
    for (let n in map) {
      if (map[n] === 1) return Number(n);
    }
  }