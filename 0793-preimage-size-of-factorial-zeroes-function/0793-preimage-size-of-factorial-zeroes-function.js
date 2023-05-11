var preimageSizeFZF = function (K) {
  let k = 0, t = 0
  while (k <= K) {
    if (k == K) return 5
    t++
    let count = count5(t) + 1
    k += count
  }
  return 0

  function count5(t) {
    let rtn = 0
    while (t % 5 == 0) {
      t = t / 5
      rtn++
    }
    return rtn
  }

};