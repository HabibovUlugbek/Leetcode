
var reverse = function (x) {
  const MIN = Math.pow(-2, 31);
  const MAX = MIN * -1 - 1;
  if (x < 0) {
    k = -1;
    x = x * -1;
  } else k = 1;
  var x = x.toString().split("");
  var reverseword = [];

  for (let i = x.length - 1; i >= 0; i--) {
    reverseword.push(x[i]);
  }
  var s = k * reverseword.join("");
  if (s < MIN) {
    return 0;
  } else if (s > MAX) {
    return 0;
  } else {
    return s;
  }
};
console.log(reverse(-123));
