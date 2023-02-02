
var isNStraightHand = function (hand, size) {
  if (hand.length % size !== 0) return false;
  let cnt = {};
  hand.sort((a, b) => a - b);
  for (let n of hand) {
    cnt[n] = (cnt[n] || 0) + 1;
  }

  for (let i = 0; i < hand.length; i++) {
    if (cnt[hand[i]] === 0) continue;
    let cur = 0;
    while (cur < size) {
      if (!cnt[hand[i] + cur]) return false;
      cnt[hand[i] + cur]--;
      cur++;
    }
  }
  return true;
};