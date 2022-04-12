function kWeakestRows(mat: number[][], k: number): number[] {
  return mat
    .map((e, i) => [i, e.reduce((acc, cur) => acc + cur, 0)])
    .sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]))
    .map((x) => x[0])
    .slice(0, k);
}
