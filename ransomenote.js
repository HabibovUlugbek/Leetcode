/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function (ransomNote, magazine) {
    let count = 0;
    for (let i = 0; i < ransomNote.length; i++) {
      if (magazine.includes(ransomNote[i])) {
        magazine = magazine.replace(ransomNote[i], "");
        count++;
      }
    }
    return count == ransomNote.length;
  };