function countPrimeSetBits(left: number, right: number): number {
  let count = 0;
  for (let i = left; i <= right; i++) {
    let str: string = i.toString(2);
    if (isPrime(str.split("0").join("").length)) count++;
    console.log(i, "  === ", count);
  }
  return count;
}

function isPrime(n: number): boolean {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= Math.trunc(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
