/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
    // handle if the coordinate is out of bounds
	// or if it is already the new color
	// or if it's not from the original color we're trying to change
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor)   {
        return image; // return image as-is
    }
    
    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);
    
	// return modified image
    return image;
};