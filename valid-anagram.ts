function isAnagram(s: string, t: string): boolean {
  const map = {};
  s.split("").map((c) => (map[c] = map[c] ? map[c] + 1 : 1));
  t.split("").map((c) => (map[c] = map[c] ? map[c] - 1 : -1));
  return Object.keys(map).every((k) => map[k] === 0);
}
