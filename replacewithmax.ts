function replaceElements(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr.slice(i + 1).length > 0 ? Math.max(...arr.slice(i + 1)) : -1;
  }
  return arr;
}
