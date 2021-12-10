function close (mat, i, j) {
    for (let dist = 1; true; dist++) {
      for (let x = 0, y = dist; x <= dist; x++, y--) {
        const left = i - x
        const right = i + x
        const top = j - y
        const bottom = j + y
        if (
          mat[left]?.[top] === 0 ||
            mat[left]?.[bottom] === 0 ||
            mat[right]?.[top] === 0 ||
            mat[right]?.[bottom] === 0
        ) {
          return dist
        }
      }
    }
  }
  
  /**
   * @param {number[][]} mat
   * @return {number[][]}
   */
  var updateMatrix = function (mat) {
    const result = []
    for (let i = 0; i < mat.length; i++) {
      result.push([])
      for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] === 1) {
          result[i].push(close(mat, i, j))
        } else {
          result[i].push(0)
        }
      }
    }
  
    return result
  }

  //2 solution 
  var updateMatrix = function (mat) {
	const m = mat.length,
		n = mat[0].length;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (mat[i][j] === 0) continue;
			mat[i][j] = Infinity;
			if (i - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i - 1][j]);
			if (j - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j - 1]);
		}
	}

	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			if (mat[i][j] === 0) continue;

			if (i + 1 < m) mat[i][j] = Math.min(mat[i][j], 1 + mat[i + 1][j]);
			if (j + 1 < n) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j + 1]);
		}
	}

	return mat;
};