var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const res = new Array(numRows);
    res.fill('');
    
    let isIncreasing = true;
    let row = 0;
    for (let i = 0; i < s.length; i++) {
        res[row] += s[i];
        if (row === 0) isIncreasing = true;
        if (row === numRows - 1) isIncreasing = false;
        row += isIncreasing ? 1 : -1;
    }
    
    return res.join('');
};