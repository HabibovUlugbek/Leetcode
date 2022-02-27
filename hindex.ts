function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);
    
    let result:number = 0;
    for (let [index, value] of citations.entries()) {
      const h:number = index + 1;
      
      if (value < h) {
        return result;
      }
      
      result = h;
    }
    
    return result;
  };