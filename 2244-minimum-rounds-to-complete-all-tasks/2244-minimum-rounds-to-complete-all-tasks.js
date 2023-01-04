const minimumRounds = (tasks, map = new Map()) => {
    let res = 0;
    for(let i=0;i<tasks.length;i++){
        map.set(tasks[i], (map.get(tasks[i]) !== undefined ? (map.get(tasks[i]) + 1) : 1))
    }
    const iterator = map.values();
    for (const value of iterator) {
        if(value < 2) return -1;
        let temp = parseInt(value / 3) + (value % 3 !== 0 ? 1 : 0);
        res += temp;
    }
    return res;
};