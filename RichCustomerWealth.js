var maximumWealth = function(accounts) {
    let sums = [];
    for (let i = 0; i < accounts.length; i++) {
    
    let sum = 0
        for (let j = 0; j < accounts[i].length; j++) {
           sum += accounts[i][j]
            }
            sums.push(sum)
    }
    


    let max = 0;
    for (let i = 0; i < sums.length; i++) {
        if(max<sums[i]) {
            max = sums[i]
        }
    }

    return max;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))

