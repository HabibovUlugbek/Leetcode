/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    recursive(image, sr, sc, image[sr][sc], newColor);
    return image;
};

var recursive = (image, x, y, oldColor, newColor) => {
    if (x < 0 || y < 0 || x >= image.length || y >= image[x].length ||
       image[x][y] === newColor || image[x][y] !== oldColor) {
        return;
    }
    image[x][y] = newColor;
    recursive(image, x + 1, y, oldColor, newColor);
    recursive(image, x, y + 1, oldColor, newColor);
    recursive(image, x - 1, y, oldColor, newColor);
    recursive(image, x, y - 1, oldColor, newColor);
}