function isOneBitCharacter(bits: number[]): boolean {
    let i:number = 0;
    while (i < bits.length - 1) {
      if (bits[i] === 1) i++;
      i++;
    }
    return bits[i] === 0;
  };