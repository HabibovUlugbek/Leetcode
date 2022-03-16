function nextGreaterElement(n: number): number {
  let arr: string[] = n.toString().split("");
  let pivot: number = -1;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      pivot = i - 1;
      break;
    }
  }
  if (pivot === -1) return -1;

  for (let i = arr.length - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
      break;
    }
  }
  let left = arr.slice(0, pivot + 1);
  let right = arr.slice(pivot + 1);
  right.reverse();
  let res: number = Number(left.join("") + right.join(""));
  return res > Math.pow(2, 31) - 1 ? -1 : res;
}
