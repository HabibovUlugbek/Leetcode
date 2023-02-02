function isAlienSorted(words: string[], order: string): boolean {
  let alphabet = new Map();
  let index = 0;

  for (let letter of order) {
    alphabet.set(letter, index);
    index++;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (compare(words[i], words[i+1], alphabet) !== 1) {
      continue;
    }
    
    return false;
  }
  
  return true;
};

function compare(a, b, alphabet) {
  const aLength = a.length;
  const bLength = b.length;
  const minLength = Math.min(aLength, bLength);
  
  for (let i = 0; i < minLength; i++) {
    const aOrder = alphabet.get(a[i]);
    const bOrder = alphabet.get(b[i]);
    
    if (aOrder === bOrder) {
      continue;
    }
    
    if (aOrder < bOrder) {
      return -1;
    }
    
    return 1;
  }
  
  if (aLength === bLength) {
    return 0;
  }
  
  return aLength < bLength ? -1 : 1;
};