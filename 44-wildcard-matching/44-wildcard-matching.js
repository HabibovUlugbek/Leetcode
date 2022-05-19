/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  var prev = [];
  var now = [];
  for (var i = 0; i <= s.length; i++) {
    var tmp = prev;
    prev = now;
    now = tmp;
    now[0] = i === 0;
    for (var j = 1; j <= p.length; j++) {
      now[j] = p[j - 1] === '*' ?
        prev[j] || prev[j - 1] || now[j - 1] :
        prev[j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '?');
    }
  }
  return !!now[p.length];
}