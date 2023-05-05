var maximumWhiteTiles = function (tiles, carpetLen) {
    tiles.sort((a, b) => a[0] - b[0])

    let right = 1;
    let cover = tiles[0][1] - tiles[0][0] + 1;
    let maxCovered = cover;
    if (maxCovered >= carpetLen) return carpetLen

    for (const tile of tiles) {
        let start = tile[0]
        let end = start + carpetLen - 1

        while (right < tiles.length && tiles[right][1] <= end) {
            cover += tiles[right][1] - tiles[right][0] + 1
            right++
        }
        if (right === tiles.length || end < tiles[right][0]) {
            maxCovered = Math.max(maxCovered, cover)
        } else {
            let partial = end - tiles[right][0] + 1
            maxCovered = Math.max(maxCovered, cover + partial)
        }

        cover -= (tile[1] - tile[0]) + 1
    }

    return maxCovered
};