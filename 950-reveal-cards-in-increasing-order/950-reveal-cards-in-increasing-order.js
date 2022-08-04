/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  var res = [];

  while (deck.length) {
    if (res.length > 0) {
      res.unshift(res.pop());
    }
    res.unshift(deck.pop());
  }
  return res;
};