var removeCoveredIntervals = function(intervals) {
    let count = intervals.length
    for (var [index1, i1] of intervals.entries()) {
        for (var [index2, i2] of intervals.entries()) {
            if (index2 !== index1) {
                if (i2[0] <= i1[0] && i1[1] <= i2[1]) {
                    count--
                    break
                }   
            }
        }
    }
    return count
};