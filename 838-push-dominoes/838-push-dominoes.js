/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    
    
    let workStr = dominoes.split("");
    let lastRes = [...dominoes];
    let finished = false;
    
    while (!finished) {
        for (let i = 0; i < workStr.length; i++) {
            const v = workStr[i];
            if (v === 'L' || v === 'R') continue;
            const nL = (i - 1) >= 0 ? lastRes[i-1] : null;
            const nR = (i + 1) <= workStr.length ? lastRes[i+1] : null;
            const stat = nL === 'R' && nR === 'L';
            if (stat) continue;
            if (!!nL && nL === 'R') {
                workStr[i] = 'R';
            } else if (!!nR && nR === 'L') {
                workStr[i] = 'L';
            }
        }
            
        if ((workStr.length == lastRes.length) && (workStr.every((item, index) => {
            return item === lastRes[index]
        }))) {
            finished = true;
            break;
        } else {
            lastRes = [...workStr];
        }
        
    }
    
    
    return workStr.join("");
};