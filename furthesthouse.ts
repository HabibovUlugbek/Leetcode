function maxDistancehouse(colors: number[]): number {
  let maxpair = 0;
  for (let i = 0; i < colors.length; i++) {
    for (let j = i; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        maxpair = Math.max(maxpair, j - i);
      }
    }
  }
  return maxpair;
}
