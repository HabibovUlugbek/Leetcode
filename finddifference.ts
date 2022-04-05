function findTheDifference(s: string, t: string): string {
  const sum1 = s.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  const sum2 = t.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return String.fromCharCode(sum2 - sum1);
}
