/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let n = rings.length;

    let map = new Map(); // map of  rod nums  to their  set of colors
    for (let i = 0; i < n; i += 2) {
        let color = rings[i];
        let rod = +rings[i + 1];

        if (!map.has(rod)) map.set(rod, new Set());
        map.get(rod).add(color);
    }

    let count = 0;
    for (let [rod, setColors] of map) {
        if (setColors.size == 3) count++;
    }
    return count;
};