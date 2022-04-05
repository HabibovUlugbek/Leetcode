function mergeAlternately(word1: string, word2: string): string {
  let result = "";

  let i = 0;

  while (i < word1.length || i < word2.length) {
    result += word1[i] !== undefined ? word1[i] : "";
    result += word2[i] !== undefined ? word2[i] : "";
    i++;
  }

  return result;
}
