var divideArray = function (nums) {
    let map = {};
    for (let num of nums) {
        map[num] ? delete map[num] : (map[num] = true);
    }
    return Object.keys(map).length === 0 ? true : false;
};