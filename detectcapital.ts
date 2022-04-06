function detectCapitalUse(word: string): boolean {
  if (word.toLowerCase() === word) return true;
  else if (word.slice(1) == word.slice(1).toLowerCase()) return true;
  if (word.toLowerCase().toUpperCase() === word) return true;
  return false;
}
