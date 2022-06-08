var countGoodRectangles = function (rectangles) {
  let map = new Map(),max=0;
  rectangles.forEach(el => {
    max=Math.max(max,Math.min(el[0], el[1]));
    map.set(Math.min(el[0], el[1]), map.get(Math.min(el[0], el[1])) + 1 || 1);
  });
  return map.get(max);
};