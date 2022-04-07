function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (original.length != m * n) {
    return [];
  }
  let result = [];
  for (let i = 0; i < original.length; i += n) {
    result.push(original.slice(i, i + n));
  }
  return result;
}
