var reversePrefix = function(word, ch) {
	const findIndex = word.indexOf(ch);

	if (findIndex == -1) return word;

	const reverseWords = [...word.slice(0, findIndex + 1)].reverse().join('');

	return reverseWords + word.slice(findIndex + 1);
};