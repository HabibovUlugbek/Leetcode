/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  let x = grid.length;
  let y = grid[0].length;
  if (x === 1 && y == 1) return grid;
  grid = grid.flat();
  if (k > grid.length) k = k % grid.length;
  let arr = grid.slice(-k);
  grid.splice(grid.length - k, k);
  grid = [...arr, ...grid];
  return construct2D(grid, x, y);
};
function construct2D(original, m, n) {
  if (original.length != m * n) {
    return [];
  }
  let result = [];
  for (let i = 0; i < original.length; i += n) {
    result.push(original.slice(i, i + n));
  }
  return result;
}
