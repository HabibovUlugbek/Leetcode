const canSeePersonsCount = (a) => {
    let n = a.length;
    let res = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let count = 0;
        let max = 0;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[i]) {
                if (a[j] > max) count++; 
                max = Math.max(max, a[j]);
            } else {
                count++;
                break;
            }
        }
        res[i] = count;
    }
    return res;
};
